import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import { Exercise } from "@/types/workout";

const WorkoutListCard = ({ workout }: { workout: Exercise }) => {
	const { id, name, image, equipment, duration, caloriesBurned, rating } =
		workout;

	return (
		<article className="flex w-full items-center gap-4 rounded-xl border border-white/10 bg-card p-3 mb-3 text-white transition-colors hover:border-white/15">
			{/* Image */}
			<div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-lg">
				<Image
					src={image}
					alt={name}
					fill
					className="object-cover"
					sizes="112px"
				/>
			</div>

			{/* Workout Info */}
			<div className="min-w-0 flex-1">
				<h3 className="truncate text-xs font-bold uppercase tracking-wide">
					{name}
				</h3>

				<p className="mt-0.5 text-[10px] text-muted">{equipment}</p>

				{/* Stats */}
				<div className="mt-1.5 flex items-center flex-wrap gap-3 text-[9px] text-muted">
					{/* Duration */}
					<span className="flex items-center gap-1">
						<Clock3 size={11} className="text-primary" />
						{duration} min
					</span>

					{/* Calories */}
					<span className="flex items-center gap-1">
						<Flame size={11} className="text-primary" />
						{caloriesBurned} kcal
					</span>

					{/* Rating */}
					<span className="flex items-center gap-1">
						<Star size={11} className="fill-primary text-primary" />
						{rating}
					</span>
				</div>
			</div>

			{/* Actions */}
			<div className="flex flex-col sm:flex-row shrink-0 items-center gap-2 mr-0 sm:mr-10">
				<Link
					href={`/workout/${id}`}
					className="rounded-full border border-white/15 px-4 py-2 text-[10px] font-medium transition-colors hover:bg-white/5"
				>
					View Details
				</Link>

				<button
					type="button"
					className="rounded-full bg-primary px-3 py-2 text-[10px] font-semibold text-black transition-opacity hover:opacity-90 cursor-pointer"
				>
					Mark as Done
				</button>
			</div>
		</article>
	);
};

export default WorkoutListCard;
