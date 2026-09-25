import { useMyPlan } from "@/context/MyPlanContext";
import { useSavedWorkout } from "@/context/SavedWorkoutContext";
import { Exercise } from "@/types/workout";
import React from "react";
import { toast } from "react-toastify";

const AddToPlanButton = ({ workout }: { workout: Exercise }) => {
	const { planWorkouts, setPlanWorkouts } = useMyPlan();
	const { savedWorkouts, setSavedWorkouts } = useSavedWorkout();

	const handlePlanWorkouts = () => {
		const alreadyPlanned = planWorkouts.some(
			(planWorkout) => planWorkout.id === workout.id,
		);

		if (!alreadyPlanned) {
			setPlanWorkouts([...planWorkouts, workout]);
			toast.success("Workout added to your plan");
		} else {
			let confirm = window.confirm(
				"Workout already in your plan. Do you want to remove it from Saved list?",
			);
			if (confirm) {
				setSavedWorkouts(
					savedWorkouts.filter(
						(savedWorkout) => savedWorkout.id !== workout.id,
					),
				);
				toast.error("Workout removed from saved list");
			}
		}
	};

	return (
		<button
			onClick={handlePlanWorkouts}
			type="button"
			className="rounded-full bg-primary-muted px-3 py-2 text-[10px] font-semibold text-white transition-opacity hover:opacity-60 cursor-pointer"
		>
			Add to Plan
		</button>
	);
};

export default AddToPlanButton;
