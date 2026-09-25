"use client";

import { useMyPlan } from "@/context/MyPlanContext";

const WorkoutListCardRemove = ({ cardId }: { cardId: number }) => {
	const { planWorkouts, setPlanWorkouts } = useMyPlan();

	return (
		<button
			onClick={() => {
				setPlanWorkouts(
					planWorkouts.filter((workout) => workout.id !== cardId),
				);
			}}
			type="button"
			className="rounded-full bg-primary px-3 py-2 text-[10px] font-semibold text-black transition-opacity hover:opacity-90 cursor-pointer"
		>
			Mark as Done
		</button>
	);
};

export default WorkoutListCardRemove;
