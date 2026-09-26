"use client";
import React, { useState } from "react";
import EmptyState from "./components/EmptyState";
import WorkoutListCard from "@/app/my-plan/components/WorkoutListCard";
import { useMyPlan } from "@/context/MyPlanContext";
import { useSavedWorkout } from "@/context/SavedWorkoutContext";
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";

const MyPlan = () => {
	const [currTab, setCurrTab] = useState("Today's Plan");
	const { planWorkouts } = useMyPlan();
	const { savedWorkouts } = useSavedWorkout();

	const [sortBy, setSortBy] = useState("duration");
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

	const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortBy(e.target.value);
	};

	const sortedPlanWorkouts = planWorkouts.sort((a, b) => {
		if (sortBy === "duration") {
			if (sortOrder === "asc") {
				return a.duration - b.duration;
			} else {
				return b.duration - a.duration;
			}
		} else if (sortBy === "calories") {
			if (sortOrder === "asc") {
				return a.caloriesBurned - b.caloriesBurned;
			} else {
				return b.caloriesBurned - a.caloriesBurned;
			}
		} else if (sortBy === "rating") {
			if (sortOrder === "asc") {
				return a.rating - b.rating;
			} else {
				return b.rating - a.rating;
			}
		}
		return 0;
	});

	const sortedSavedWorkouts = savedWorkouts.sort((a, b) => {
		if (sortBy === "duration") {
			if (sortOrder === "asc") {
				return a.duration - b.duration;
			} else {
				return b.duration - a.duration;
			}
		} else if (sortBy === "calories") {
			if (sortOrder === "asc") {
				return a.caloriesBurned - b.caloriesBurned;
			} else {
				return b.caloriesBurned - a.caloriesBurned;
			}
		} else if (sortBy === "rating") {
			if (sortOrder === "asc") {
				return a.rating - b.rating;
			} else {
				return b.rating - a.rating;
			}
		}
		return 0;
	});

	return (
		<main className="min-h-screen container mx-auto w-full mt-15 px-4 py-8 md:px-6 lg:py-12">
			<div>
				{/* Title */}
				<h1 className="text-2xl font-black uppercase tracking-wide md:text-3xl">
					My Plan
				</h1>

				{/* Description */}
				<p className="mt-2 text-sm leading-relaxed text-muted">
					Cap of five lifts for today. Finish them, then load more.
				</p>
			</div>

			<div className="p-5 mt-5 border border-white/10 bg-card rounded-2xl">
				<div className="grid grid-cols-3">
					<div className="flex flex-col gap-2">
						<span className="text-sm font-semibold tracking-wide text-muted">
							Exercise
						</span>
						<span
							className={`text-2xl font-oswald font-extrabold ${currTab === "Today's Plan" ? "text-primary" : "text-white"}`}
						>
							{currTab === "Today's Plan"
								? planWorkouts.length
								: savedWorkouts.length}
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-sm font-semibold tracking-wide text-muted">
							Minutes
						</span>
						<span className="text-2xl text-white font-oswald font-extrabold">
							{currTab === "Today's Plan"
								? planWorkouts.reduce((acc, curr) => acc + curr.duration, 0)
								: savedWorkouts.reduce((acc, curr) => acc + curr.duration, 0)}
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-sm font-semibold tracking-wide text-muted">
							Calories
						</span>
						<span className="text-2xl text-white font-oswald font-extrabold">
							{currTab === "Today's Plan"
								? planWorkouts.reduce(
										(acc, curr) => acc + curr.caloriesBurned,
										0,
									)
								: savedWorkouts.reduce(
										(acc, curr) => acc + curr.caloriesBurned,
										0,
									)}
						</span>
					</div>
				</div>
			</div>

			<div className="flex  flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center text-sm mt-10 mb-6">
				<div className="flex bg-card p-1 border border-white/10 rounded-xl">
					<button
						className={`px-4.5 py-1.5 rounded-lg cursor-pointer ${currTab === "Today's Plan" ? "bg-primary-muted border border-white/10 text-white" : "text-muted"}`}
						onClick={() => setCurrTab("Today's Plan")}
					>
						Today's Plan
					</button>
					<button
						onClick={() => setCurrTab("Saved")}
						className={`px-4.5 py-1.5 rounded-lg cursor-pointer ${currTab === "Saved" ? "bg-primary-muted border border-white/10 text-white" : "text-muted"}`}
					>
						Saved
					</button>
				</div>

				<div className="flex">
					<button className="text-muted px-4 py-2 rounded-xl">Sort By:</button>
					<select
						onChange={handleSortByChange}
						className="text-white px-4 py-2 rounded-xl bg-card border border-white/10 hover:border-mist-400 transition appearance-none cursor-pointer"
					>
						<option value="duration" className="bg-card text-white rounded-2xl">
							Duration
						</option>
						<option value="calories" className="bg-card text-white rounded-2xl">
							Calories
						</option>
						<option value="rating" className="bg-card text-white">
							Rating
						</option>
					</select>

					<button
						onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
						className="text-white p-3 ml-1 rounded-xl bg-card border border-white/10 cursor-pointer hover:border-mist-400 transition"
					>
						{sortOrder === "asc" ? (
							<ArrowUpNarrowWide size={17} />
						) : (
							<ArrowDownWideNarrow size={17} />
						)}
					</button>
				</div>
			</div>

			<div>
				{currTab === "Today's Plan" ? (
					planWorkouts.length === 0 ? (
						<EmptyState />
					) : (
						sortedPlanWorkouts.map((workout) => (
							<WorkoutListCard
								workout={workout}
								key={workout.id}
								belongsToPlan={true}
							/>
						))
					)
				) : savedWorkouts.length === 0 ? (
					<EmptyState />
				) : (
					sortedSavedWorkouts.map((workout) => (
						<WorkoutListCard
							workout={workout}
							key={workout.id}
							belongsToPlan={false}
						/>
					))
				)}
			</div>
		</main>
	);
};

export default MyPlan;
