import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
	return (
		<main className="min-h-[70vh] flex items-center justify-center px-4">
			<div className="w-full max-w-lg text-center">
				{/* Icon */}
				<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-muted">
					<Dumbbell className="h-10 w-10 text-primary" />
				</div>

				{/* 404 */}
				<p className="text-7xl font-black tracking-tight text-primary sm:text-8xl">
					404
				</p>

				<h1 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
					Workout Not Found
				</h1>

				<p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">
					Looks like this workout doesn't exist or the page you're looking for
					has been moved.
				</p>

				{/* Action */}
				<div className="mt-8">
					<Link
						href="/workouts"
						className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-80"
					>
						<ArrowLeft className="h-4 w-4" />
						Browse Workouts
					</Link>
				</div>
			</div>
		</main>
	);
}
