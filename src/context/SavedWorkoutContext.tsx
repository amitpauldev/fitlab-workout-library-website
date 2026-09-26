"use client";

import { Exercise } from "@/types/workout";
import { createContext, useContext, useEffect, useState } from "react";

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

	const [isHydrated, setIsHydrated] = useState(false);

	// Load from localStorage
	useEffect(() => {
		const stored = localStorage.getItem("saved-workouts");
		if (stored) {
			setSavedWorkouts(JSON.parse(stored));
		}

		setIsHydrated(true);
	}, []);

	// Save to localStorage
	useEffect(() => {
		if (!isHydrated) return;

		localStorage.setItem("saved-workouts", JSON.stringify(savedWorkouts));
	}, [savedWorkouts]);

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
