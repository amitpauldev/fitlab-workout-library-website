"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
	const [showNav, setShowNav] = useState(false);

	const openNav = () => {
		setShowNav(true);
	};

	const closeNav = () => {
		setShowNav(false);
	};

	return (
		<header>
			<div className="sticky top-0 z-50 flex items-center w-full shadow bg-blackish opacity-95 backdrop-blur">
				<nav className="container mx-auto flex items-center justify-between p-6">
					<div className="flex items-center shrink-0 text-white mr-6">
						<img src="assets/logo.png" alt="logo" className="w-5 mr-2" />
						<span className="font-oswald font-bold text-lg tracking-tight">
							FITLOG
						</span>
					</div>
					<div className="hidden sm:flex items-center text-[12px] text-muted">
						<Link
							href="/"
							className="py-1 px-3 rounded-xl mr-4 hover:text-primary hover:bg-primary-muted"
						>
							Workouts
						</Link>
						<Link
							href="/my-plan"
							className="py-1 px-3 rounded-xl hover:text-primary hover:bg-primary-muted"
						>
							My Plan
						</Link>
					</div>
					<div className="flex items-center gap-3 text-[12px] text-muted">
						<div className="flex items-center gap-2">
							Plan{" "}
							<span className="py-0.5 px-1.5 rounded-full bg-primary text-black font-bold">
								0
							</span>
						</div>
						<div className="flex items-center gap-2">
							Saved{" "}
							<span className="py-1 px-2 border border-primary-muted rounded-full text-white font-bold">
								0
							</span>
						</div>
					</div>
				</nav>
				{/* Mobile menu button */}
				<button
					type="button"
					onClick={showNav ? closeNav : openNav}
					className="sm:hidden p-2 mr-3 cursor-pointer rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
					aria-label={showNav ? "Close menu" : "Open menu"}
				>
					<img src="/assets/hamburger.png" />
				</button>
			</div>

			{/* Mobile nav */}
			<div className="w-full overflow-x-hidden">
				<div
					className={`fixed z-50 h-screen right-0 top-0 w-full bg-black/40 sm:hidden transition-all duration-300 ${
						showNav
							? "translate-x-0 opacity-100 visible"
							: "translate-x-full opacity-0 invisible"
					}`}
					onClick={closeNav}
				/>
				<div
					className={`fixed z-50 h-screen right-0 top-0 border-b bg-primary-muted sm:hidden transition-transform duration-500 ${
						showNav
							? "translate-x-0 opacity-100 visible"
							: "translate-x-full opacity-0 invisible"
					}`}
				>
					<div className="flex justify-between wrapper pl-6 py-4">
						<div className="flex flex-col gap-1.5 mt-15">
							<Link href="/" className="py-1 px-3 rounded-xl text-muted ">
								Workouts
							</Link>
							<Link href="/my-plan" className="py-1 px-3 rounded-xl text-muted">
								My Plan
							</Link>
						</div>

						<button
							type="button"
							onClick={closeNav}
							className="self-start md:hidden p-2 mr-4 mt-2 cursor-pointer rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
							aria-label={showNav ? "Close menu" : "Open menu"}
						>
							<img src="assets/x-button.png" className="w-4" />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
