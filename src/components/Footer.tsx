import React from "react";

const Footer = () => {
	return (
		<footer className="container bg-blackish shadow mx-auto flex items-center justify-between p-6">
			<div className="flex items-center shrink-0 text-white mr-6">
				<img src="assets/logo-horizontal.png" alt="logo" className="w-4 mr-2" />
				<span className="font-oswald font-bold text-md tracking-tight">
					FITLOG
				</span>
			</div>
			<div className="">
				<p className="text-[12px] text-muted">
					© 2026 FITLOG. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
