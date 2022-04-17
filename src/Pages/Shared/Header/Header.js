import React, { useState } from "react";
import logo from "../../../images/light-logo.png";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import { signOut } from "firebase/auth";
import CustomLink from "../CustomLink/CustomLink";
import avatar from "../../../images/avatar.jpg";

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
						className={`md:flex block flex-row text-center ${
							open ? "absolute md:static left-1/2 top-20" : "hidden"
						}`}
					>
						<CustomLink to="/home">Home</CustomLink>
						<CustomLink to="/about" className="md:ml-12">
							About
						</CustomLink>
						<CustomLink to="/services" className="md:ml-12">
							Services
						</CustomLink>
						<CustomLink to="/checkout" className="md:ml-12">
							Checkout
						</CustomLink>
						<CustomLink to="/blog" className="md:ml-12">
							Blog
						</CustomLink>
					</ul>
					<div
						className={`md:flex block flex-row text-center ${
							open ? "absolute md:static left-1/2 top-48" : "hidden"
						}`}
					>
						{user ? (
							<div className="flex items-center">
								<div className="flex items-center">
									{user.photoURL ? (
										<img
											className="rounded-full border  border-slate-200"
											height="40px"
											width="40px"
											src={user.photoURL}
											alt=""
										/>
									) : (
										<img
											className="rounded-full border  border-slate-200"
											height="40px"
											width="40px"
											src={avatar}
											alt=""
										/>
									)}

									<p className="mr-4 ml-2">{user.displayName}</p>
								</div>
								<button
									className="border hover:bg-slate-200 hover:text-slate-800 py-1 px-4 rounded"
									onClick={handleLogout}
								>
									Logout
								</button>
							</div>
						) : (
							<>
								<CustomLink to="/login">Login</CustomLink>
								<CustomLink to="/register" className="md:ml-12">
									Register
								</CustomLink>
							</>
						)}
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
