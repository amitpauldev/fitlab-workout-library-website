import Image from "next/image";
import banner from "../../public/assets/banner.png";

const Hero = () => {
	return (
		<section className="container mx-auto py-12 px-8">
			<div className="rounded-2xl border border-stroke-muted bg-card flex flex-col md:flex-row items-center justify-between p-10 md:p-15">
				<div className="w-1/2">
					<span className="text-sm  text-primary">WORKOUT LIBRARY</span>
					<h1 className="leading-none my-5">
						TRAIN WITH INTENT. LOG <br /> EVERY SET.
					</h1>
					<p className="mb-11 text-muted">
						Find your workouts, plan your day, and track your progress. Whether
						you're a beginner or an experienced athlete, FITLOG is the perfect
						place to get started.
					</p>
					<button className="bg-primary text-sm font-bold text-black py-2 px-4 rounded-md cursor-pointer hover:opacity-80">
						BROWSE WORKOUTS
					</button>
				</div>

				<div className="w-1/2">
					<Image src={banner} alt="banner" width={400} className="ml-auto" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
