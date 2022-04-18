import React, { useState } from "react";
import logo from "../../../images/light-logo.png";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import { signOut } from "firebase/auth";
import CustomLink from "../CustomLink/CustomLink";
import avatar from "../../../images/avatar.jpg";
import { Link } from "react-router-dom";

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
						<Link to="/">
							<img className="w-28 md:w-36" src={logo} alt="" />
						</Link>
					</div>
					<div onClick={() => setOpen(!open)} className="lg:hidden">
						{open ? (
							<XIcon className="h-8 w-8 text-slate-50" />
						) : (
							<MenuAlt3Icon className="h-8 w-8 text-slate-50" />
						)}
					</div>
					<ul
						className={`lg:flex block flex-row text-center ${
							open
								? "absolute lg:static w-full lg:w-auto bg-slate-800 lg:bg-transparent py-3 border-t lg:border-t-0 left-0 top-[75px]"
								: "hidden"
						}`}
					>
						<CustomLink to="/home">Home</CustomLink>
						<CustomLink to="/about" className="lg:ml-10">
							About
						</CustomLink>
						<CustomLink to="/services" className="lg:ml-10">
							Services
						</CustomLink>
						<CustomLink to="/checkout" className="lg:ml-10">
							Checkout
						</CustomLink>
						<CustomLink to="/blog" className="lg:ml-10">
							Blog
						</CustomLink>

						{user ? (
							<div className="lg:flex items-center lg:ml-10">
								<div className="flex items-center justify-center mb-4 lg:mb-0">
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
								<CustomLink className="lg:ml-10" to="/login">
									Login
								</CustomLink>
								<CustomLink to="/register" className="lg:ml-10">
									Register
								</CustomLink>
							</>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
