"use client";

import { useMyPlan } from "@/context/MyPlanContext";
import { Check, X } from "lucide-react";
import { toast } from "react-toastify";

const PlanListCardAction = ({ cardId }: { cardId: number }) => {
	const { planWorkouts, setPlanWorkouts } = useMyPlan();

	// Find the workout in the plan, find method returns a reference to the element that matches the condition;
	const planWorkout = planWorkouts.find(
		(planWorkout) => planWorkout.id === cardId,
	);

	const handleMarkAsDone = () => {
		setPlanWorkouts((prev) =>
			prev.map((workout) =>
				workout.id === cardId
					? {
							...workout,
							markedAsDone: !workout.markedAsDone,
						}
					: workout,
			),
		);
	};

	return (
		<div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-muted">
			<button
				onClick={handleMarkAsDone}
				type="button"
				className={`flex gap-2 items-center rounded-full ${planWorkout?.markedAsDone ? "bg-primary-muted" : "bg-primary"} px-3 py-2 text-[10px] font-semibold text-black transition-opacity hover:opacity-90 cursor-pointer`}
			>
				{planWorkout?.markedAsDone ? (
					<span className="text-white px-2 flex items-center gap-3">
						Done <Check className="h-3.5 w-3" />
					</span>
				) : (
					"Mark as done"
				)}
			</button>

			<button
				onClick={() => {
					setPlanWorkouts(
						planWorkouts.filter((workout) => workout.id !== cardId),
					);
					toast.error("Workout removed from your plan");
				}}
				className="self-end mr-1 sm:self-center sm:mr-0 rounded-xl p-0 sm:p-1 hover:bg-red-400 transition cursor-pointer"
			>
				<X />
			</button>
		</div>
	);
};

export default PlanListCardAction;
