import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";
import { Exercise } from "@/types/workout";

const WorkoutCard = ({ workout }: { workout: Exercise }) => {
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
	} = workout;

	return (
		<article className="w-full max-w-full overflow-hidden rounded-2xl border border-white/10 bg-card text-white shadow-lg md:max-w-lg">
			{/* Image */}
			<div className="relative aspect-[16/9] overflow-hidden">
				<Image
					src={image}
					alt={name}
					width={600}
					height={300}
					loading="eager"
					className="object-cover"
				/>
			</div>

			{/* Content */}
			<div className="p-5">
				{/* Tags */}
				<div className="mb-4 flex gap-2">
					{muscleGroups.map((muscle) => (
						<span
							key={muscle}
							className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-black"
						>
							{muscle}
						</span>
					))}
				</div>

				{/* Title */}
				<h3 className="uppercase tracking-wide">{name}</h3>

				{/* Equipment */}
				<p className="mt-1 text-[12px] text-muted">{equipment}</p>

				{/* Divider */}
				<div className="my-4 border-t border-white/5" />

				{/* Stats */}
				<div className="flex items-center gap-4 px-3 py-2 text-xs text-muted">
					<div className="flex items-center gap-1.5">
						<Clock3 size={15} strokeWidth={1.5} />
						<span>{duration} min</span>
					</div>

					<div className="flex items-center gap-1.5">
						<Flame size={15} strokeWidth={1.5} />
						<span>{caloriesBurned} kcal</span>
					</div>

					<div className="flex items-center gap-1.5">
						<Star size={15} strokeWidth={1.5} />
						<span>{rating}</span>
					</div>
				</div>
			</div>
		</article>
	);
};

export default WorkoutCard;
