"use client";

import { Exercise } from "@/types/workout";
import { createContext, useContext, useState } from "react";

type MyPlanContextType = {
	planWorkouts: Exercise[];
	setPlanWorkouts: React.Dispatch<React.SetStateAction<Exercise[]>>;
};

const MyPlanContext = createContext<MyPlanContextType | undefined>(undefined);

export function MyPlanProvider({ children }: { children: React.ReactNode }) {
	const [planWorkouts, setPlanWorkouts] = useState<Exercise[]>([]);

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
