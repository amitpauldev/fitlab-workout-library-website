import React from "react";
import EmptyState from "./components/EmptyState";
import WorkoutListCard from "@/components/WorkoutListCard";
import { Exercise } from "@/types/workout";

const page = async () => {
	const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/1`);
	if (!res.ok) {
		throw new Error("Failed to fetch workout");
	}
	const workout: Exercise = await res.json();

	return (
		<main className="container mx-auto w-full mt-15 px-4 py-8 md:px-6 lg:py-12">
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
						<span className="text-2xl text-primary font-oswald font-extrabold">
							0
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-sm font-semibold tracking-wide text-muted">
							Minutes
						</span>
						<span className="text-2xl text-white font-oswald font-extrabold">
							0
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-sm font-semibold tracking-wide text-muted">
							Calories
						</span>
						<span className="text-2xl text-white font-oswald font-extrabold">
							0
						</span>
					</div>
				</div>
			</div>

			<div className="flex  flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center text-sm mt-10 mb-6">
				<div className="flex bg-card p-1 border border-white/10 rounded-xl">
					<button className="text-muted px-4.5 py-1.5 rounded-xl">
						Today's Plan
					</button>
					<button className="text-white px-4.5 py-1.5 rounded-xl">Saved</button>
				</div>

				<div className="flex">
					<button className="text-muted pl-4 pr-6 py-2 rounded-xl">
						Sort By
					</button>
					<select className="text-white pl-4 pr-6 py-2 rounded-xl bg-card border border-white/10">
						<option value="1">Duration</option>
						<option value="2">Rating</option>
					</select>
				</div>
			</div>

			<div>
				{/* <EmptyState /> */}
				<WorkoutListCard workout={workout} />
				<WorkoutListCard workout={workout} />
				<WorkoutListCard workout={workout} />
			</div>
		</main>
	);
};

export default page;
