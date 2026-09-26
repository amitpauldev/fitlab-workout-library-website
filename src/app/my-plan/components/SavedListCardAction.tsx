import { useMyPlan } from "@/context/MyPlanContext";
import { useSavedWorkout } from "@/context/SavedWorkoutContext";
import { Exercise } from "@/types/workout";
import { X } from "lucide-react";
import { toast } from "react-toastify";

const SavedListCardAction = ({
	workout,
	cardId,
}: {
	workout: Exercise;
	cardId: number;
}) => {
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
			toast.warn("Workout already in your plan");
		}
	};

	return (
		<div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-muted">
			<button
				onClick={handlePlanWorkouts}
				type="button"
				className="rounded-full bg-primary px-4.5 py-2 text-[10px] font-semibold text-black transition-opacity hover:opacity-60 cursor-pointer"
			>
				Add to Plan
			</button>

			<button
				onClick={() => {
					setSavedWorkouts(
						savedWorkouts.filter((workout) => workout.id !== cardId),
					);
					toast.error("Workout removed from saved");
				}}
				className="self-end mr-1 sm:self-center sm:mr-0 rounded-xl p-0 sm:p-1 hover:bg-red-400 transition cursor-pointer"
			>
				<X />
			</button>
		</div>
	);
};

export default SavedListCardAction;
