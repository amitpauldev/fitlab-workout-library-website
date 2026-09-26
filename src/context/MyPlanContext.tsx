"use client";

import { WorkoutWithMarkedAsDone } from "@/types/workout";
import { createContext, useContext, useEffect, useState } from "react";

type MyPlanContextType = {
	planWorkouts: WorkoutWithMarkedAsDone[];
	setPlanWorkouts: React.Dispatch<
		React.SetStateAction<WorkoutWithMarkedAsDone[]>
	>;
};

const MyPlanContext = createContext<MyPlanContextType | undefined>(undefined);

export function MyPlanProvider({ children }: { children: React.ReactNode }) {
	const [planWorkouts, setPlanWorkouts] = useState<WorkoutWithMarkedAsDone[]>(
		[],
	);

	const [isHydrated, setIsHydrated] = useState(false);

	// Load from localStorage
	useEffect(() => {
		const stored = localStorage.getItem("my-plan");
		if (stored) {
			setPlanWorkouts(JSON.parse(stored));
		}

		setIsHydrated(true);
	}, []);

	// Save to localStorage
	useEffect(() => {
		if (!isHydrated) return;

		localStorage.setItem("my-plan", JSON.stringify(planWorkouts));
	}, [planWorkouts]);

	return (
		<MyPlanContext.Provider value={{ planWorkouts, setPlanWorkouts }}>
			{children}
		</MyPlanContext.Provider>
	);
}

export function useMyPlan() {
	const context = useContext(MyPlanContext);

	if (!context) {
		throw new Error("useMyPlan must be used within MyPlanProvider");
	}

	return context;
}
