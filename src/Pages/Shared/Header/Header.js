import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/dark-logo.png";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header>
			<div className="container mx-auto">
				<nav className="flex items-center justify-between py-6">
					<div>
						<img className="w-28 md:w-36" src={logo} alt="" />
					</div>
					<div onClick={() => setOpen(!open)} className="md:hidden">
						{open ? (
							<XIcon className="h-8 w-8 text-slate-800" />
						) : (
							<MenuAlt3Icon className="h-8 w-8 text-slate-800" />
						)}
					</div>
					<ul
						className={`flex md:block flex-col text-center ${
							open ? "absolute md:static left-1/2 top-20" : "hidden"
						}`}
					>
						<Link to="/home">Home</Link>
						<Link to="/about" className="md:ml-12">
							About
						</Link>
						<Link to="/blog" className="md:ml-12">
							Blog
						</Link>
					</ul>
					<div
						className={`flex md:block flex-col text-center ${
							open ? "absolute md:static left-1/2 top-40" : "hidden"
						}`}
					>
						<Link to="/login">Login</Link>
						<Link to="/register" className="md:ml-12">
							Register
						</Link>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
