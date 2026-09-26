"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, RotateCcw } from "lucide-react";

export default function Error({
	error,
	retry,
}: {
	error: Error & { digest?: string };
	retry: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="w-full max-w-md text-center">
				{/* Error Icon */}
				<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-muted">
					<AlertCircle className="h-10 w-10 text-primary" />
				</div>

				{/* Content */}
				<h1 className="text-2xl font-bold text-foreground sm:text-3xl">
					Unable to load workouts
				</h1>

				<p className="mt-3 text-sm leading-6 text-muted">
					We couldn't fetch the workout data right now. The URL may be invalid
					or the server might be temporarily unavailable.
				</p>

				{/* Actions */}
				<div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
					<button
						onClick={() => retry()}
						className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-80"
					>
						<RotateCcw className="h-4 w-4" />
						Try Again
					</button>

					<Link
						href="/workouts"
						className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
					>
						<ArrowLeft className="h-4 w-4" />
						Browse Workouts
					</Link>
				</div>
			</div>
		</div>
	);
}
