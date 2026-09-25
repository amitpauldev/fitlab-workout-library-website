import Link from "next/link";

const EmptyState = () => {
	return (
		<div className="border border-dotted mt-7 border-white/20 rounded-xl px-5 py-15 text-center">
			<div className="flex flex-col items-center justify-center">
				<h2 className="text-sm font-bold uppercase">No workouts found</h2>
				<p className="mt-1 text-sm leading-relaxed text-muted">
					Browse the library and add a lift to get today moving.
				</p>

				<Link href="workouts">
					<button className="mt-8 flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-medium text-black transition-opacity hover:opacity-90 cursor-pointer">
						Browse workouts
					</button>
				</Link>
			</div>
		</div>
	);
};

export default EmptyState;
