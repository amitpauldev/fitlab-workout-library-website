import WorkoutCard from "@/components/WorkoutCard";
import { Exercise } from "@/types/workout";
import Link from "next/link";

const Workout = async () => {
	const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
	const data = await res.json();

	return (
		<section className="container mx-auto px-8 mb-25 mt-40">
			<div>
				<h2 className="text-2xl font-black uppercase tracking-wide">
					Workouts
				</h2>
				<span className="text-sm text-muted">
					Twelve workouts to get you started
				</span>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
				{data.map((workout: Exercise) => (
					<Link key={workout.id} href={`/workout/${workout.id}`}>
						<WorkoutCard workout={workout} />
					</Link>
				))}
			</div>
		</section>
	);
};

export default Workout;
