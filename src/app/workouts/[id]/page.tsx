import Image from "next/image";
import { Exercise } from "@/types/workout";
import CardActionsButton from "./components/CardActionsButton";

export const generateStaticParams = async () => {
	const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
	const workouts: Exercise[] = await res.json();

	return workouts.map((workout) => ({
		id: String(workout.id),
	}));
};

const WorkoutDetailsPage = async ({
	params,
}: {
	params: Promise<{ id: string }>;
}) => {
	const { id } = await params;

	const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

	if (!res.ok) {
		throw new Error("Failed to fetch workout");
	}

	const workout: Exercise = await res.json();

	const {
		name,
		image,
		muscleGroups,
		difficulty,
		duration,
		caloriesBurned,
		sets,
		reps,
		rating,
		equipment,
		description,
		instructions,
	} = workout;

	return (
		<main className="container mx-auto w-full mt-15 px-4 py-8 md:px-6 lg:py-12">
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
				{/* Image */}
				<div className="relative min-h-[400px] overflow-hidden rounded-xl lg:min-h-[540px]">
					<Image
						src={image}
						alt={name}
						fill
						priority
						className="object-cover"
						sizes="(max-width: 1024px) 100vw, 50vw"
					/>
				</div>

				{/* Workout information */}
				<div>
					{/* Title */}
					<h1 className="text-2xl font-black uppercase tracking-wide md:text-3xl">
						{name}
					</h1>

					{/* Description */}
					<p className="mt-2 text-sm leading-relaxed text-muted">
						{description}
					</p>

					{/* Muscle groups */}
					<div className="mt-3 flex flex-wrap gap-2">
						{muscleGroups.map((muscle) => (
							<span
								key={muscle}
								className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-black"
							>
								{muscle}
							</span>
						))}
					</div>

					{/* Workout details */}
					<div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-card">
						<DetailRow label="Equipment" value={equipment} />

						<DetailRow label="Difficulty" value={difficulty} />

						<DetailRow label="Sets" value={String(sets)} />

						<DetailRow label="Reps" value={reps} />

						<DetailRow label="Duration" value={`${duration} min`} />

						<DetailRow label="Calories" value={`${caloriesBurned} kcal`} />

						<DetailRow label="Rating" value={String(rating)} />
					</div>

					{/* Instructions */}
					<section className="mt-5">
						<h2 className="text-sm font-bold uppercase">Instructions</h2>

						<ol className="mt-3 space-y-3">
							{instructions.map((instruction, index) => (
								<li
									key={index}
									className="flex gap-3 text-xs leading-relaxed text-white/80"
								>
									<span>{index + 1}.</span>

									<span>{instruction}</span>
								</li>
							))}
						</ol>
					</section>

					{/* Actions */}
					<CardActionsButton workout={workout} />
				</div>
			</div>
		</main>
	);
};

const DetailRow = ({ label, value }: { label: string; value: string }) => {
	return (
		<div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5 last:border-b-0">
			<span className="text-[9px] font-semibold uppercase tracking-wide text-muted">
				{label}
			</span>

			<span className="text-[10px] font-semibold">{value}</span>
		</div>
	);
};

export default WorkoutDetailsPage;
