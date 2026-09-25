"use client";

import { Exercise } from "@/types/workout";
import { createContext, useContext, useState } from "react";

type SavedWorkoutContextType = {
	savedWorkouts: Exercise[];
	setSavedWorkouts: React.Dispatch<React.SetStateAction<Exercise[]>>;
};

const SavedWorkoutContext = createContext<SavedWorkoutContextType | undefined>(
	undefined,
);

export function SavedWorkoutProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [savedWorkouts, setSavedWorkouts] = useState<Exercise[]>([]);

	return (
		<SavedWorkoutContext.Provider value={{ savedWorkouts, setSavedWorkouts }}>
			{children}
		</SavedWorkoutContext.Provider>
	);
}

export function useSavedWorkout() {
	const context = useContext(SavedWorkoutContext);

	if (!context) {
		throw new Error("useSavedWorkout must be used within SavedWorkoutProvider");
	}

	return context;
}
