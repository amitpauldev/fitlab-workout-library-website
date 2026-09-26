import Image from "next/image";
import banner from "../../public/assets/banner.png";

const Hero = () => {
	return (
		<section className="container mx-auto mt-20 py-12 px-8">
			<div className="rounded-2xl border border-stroke-muted bg-card flex flex-col md:flex-row items-center justify-between p-5 md:p-15">
				<div className="w-full md:w-1/2 text-center md:text-left">
					<span className="text-sm  text-primary">WORKOUT LIBRARY</span>
					<h1 className="leading-none my-5 text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
						TRAIN WITH INTENT. LOG EVERY SET.
					</h1>
					<p className="mb-11 text-muted">
						FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
						into today's plan, and watch the week's work add up.
					</p>
					<a href="#library">
						<span className="inline-block bg-primary text-sm font-bold text-black py-2 px-4 rounded-md cursor-pointer hover:opacity-80">
							BROWSE WORKOUTS
						</span>
					</a>
				</div>

				<div className="w-full md:w-1/2 mt-16 md:mt-0">
					<Image
						src={banner}
						alt="banner"
						width={400}
						className="mx-auto md:mr-0 md:ml-auto"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
