"use client";

import { useMyPlan } from "@/context/MyPlanContext";
import { useSavedWorkout } from "@/context/SavedWorkoutContext";
import { Exercise } from "@/types/workout";
import { Bookmark, CheckSquare } from "lucide-react";
import { toast } from "react-toastify";

const CardActionsButton = ({ workout }: { workout: Exercise }) => {
	const { planWorkouts, setPlanWorkouts } = useMyPlan();
	const { savedWorkouts, setSavedWorkouts } = useSavedWorkout();

	// Add a new property to the workout object called markedAsDone
	const workoutWithMarkedAsDone = { ...workout, markedAsDone: false };

	const handlePlanWorkouts = () => {
		const alreadyPlanned = planWorkouts.some(
			(planWorkout) => planWorkout.id === workout.id,
		);

		if (!alreadyPlanned) {
			setPlanWorkouts([...planWorkouts, workoutWithMarkedAsDone]);
			toast.success("Workout added to your plan");
		} else {
			toast.warn("Workout already in your plan");
		}
	};

	const handleSaveWorkouts = () => {
		const alreadySaved = savedWorkouts.some(
			(savedWorkout) => savedWorkout.id === workout.id,
		);

		if (!alreadySaved) {
			setSavedWorkouts([...savedWorkouts, workoutWithMarkedAsDone]);
			toast.success("Workout saved for later");
		} else {
			toast.warn("Workout already saved");
		}
	};

	return (
		<div className="mt-6 flex flex-wrap gap-3">
			<button
				onClick={handlePlanWorkouts}
				type="button"
				className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-medium text-black transition-opacity hover:opacity-90 cursor-pointer"
			>
				<CheckSquare size={14} />
				Add to today's plan
			</button>

			<button
				onClick={handleSaveWorkouts}
				type="button"
				className="flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-white/5 cursor-pointer"
			>
				<Bookmark size={14} />
				Save for later
			</button>
		</div>
	);
};

export default CardActionsButton;
