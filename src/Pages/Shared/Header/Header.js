import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/light-logo.png";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import { signOut } from "firebase/auth";

const Header = () => {
	const [open, setOpen] = useState(false);
	const [user, loading] = useAuthState(auth);

	if (loading) {
		return <Loading></Loading>;
	}

	const handleLogout = () => {
		signOut(auth);
	};

	return (
		<header className="sticky top-0 z-10 bg-slate-800">
			<div className="container mx-auto">
				<nav className="flex items-center justify-between py-5 text-white">
					<div>
						<img className="w-28 md:w-36" src={logo} alt="" />
					</div>
					<div onClick={() => setOpen(!open)} className="md:hidden">
						{open ? (
							<XIcon className="h-8 w-8 text-slate-50" />
						) : (
							<MenuAlt3Icon className="h-8 w-8 text-slate-50" />
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
						<Link to="/services" className="md:ml-12">
							Services
						</Link>
						<Link to="/checkout" className="md:ml-12">
							Checkout
						</Link>
						<Link to="/blog" className="md:ml-12">
							Blog
						</Link>
					</ul>
					<div
						className={`flex md:block flex-col text-center ${
							open ? "absolute md:static left-1/2 top-48" : "hidden"
						}`}
					>
						{user ? (
							<button onClick={handleLogout}>Logout</button>
						) : (
							<>
								<Link to="/login">Login</Link>
								<Link to="/register" className="md:ml-12">
									Register
								</Link>
							</>
						)}
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
