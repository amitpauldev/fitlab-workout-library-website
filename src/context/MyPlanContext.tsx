"use client";

import { Exercise } from "@/types/workout";
import { createContext, useContext, useEffect, useState } from "react";

type MyPlanContextType = {
	planWorkouts: Exercise[];
	setPlanWorkouts: React.Dispatch<React.SetStateAction<Exercise[]>>;
};

const MyPlanContext = createContext<MyPlanContextType | undefined>(undefined);

export function MyPlanProvider({ children }: { children: React.ReactNode }) {
	const [planWorkouts, setPlanWorkouts] = useState<Exercise[]>([]);

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
