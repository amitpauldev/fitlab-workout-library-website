import { Exercise } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";
import Link from "next/link";

const LibrarySection = async () => {
	const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
	const data = await res.json();

	return (
		<section id="library" className="container mx-auto px-8 mb-25">
			<div>
				<h2>THE LIBRARY</h2>
				<span className="text-sm text-muted">
					Twelve lifts covering every major muscle group.
				</span>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
				{data.map((workout: Exercise) => (
					<Link key={workout.id} href={`/workouts/${workout.id}`}>
						<WorkoutCard workout={workout} />
					</Link>
				))}
			</div>
		</section>
	);
};

export default LibrarySection;
