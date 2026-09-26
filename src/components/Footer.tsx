import Image from "next/image";
import logo from "../../public/assets/logo.png";

const Footer = () => {
	return (
		<footer className="container bg-blackish shadow mx-auto flex items-center justify-between p-6">
			<div className="flex items-center shrink-0 text-white mr-6">
				<Image src={logo} alt="logo" width={15} height={15} className="mr-2" />
				<span className="font-oswald font-bold text-md tracking-tight">
					FITLOG
				</span>
			</div>
			<div className="">
				<p className="text-[12px] text-muted text-wrap">
					© 2026 FitLog — Workout Library. Train hard, log honest.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
