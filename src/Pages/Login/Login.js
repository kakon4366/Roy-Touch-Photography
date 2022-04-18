import React, { useState } from "react";
import {
	useSendPasswordResetEmail,
	useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const [signInWithEmailAndPassword, user, loading] =
		useSignInWithEmailAndPassword(auth);

	const [sendPasswordResetEmail, sending, error] =
		useSendPasswordResetEmail(auth);

	const navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	if (loading) {
		return <Loading></Loading>;
	}

	if (user) {
		navigate(from, { replace: true });
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		if (!email) {
			setEmailError("Please provide email address!");
			return;
		} else if (!password) {
			setEmailError("");
			setPasswordError("Please provide password!");
			return;
		} else {
			setPasswordError("");
		}
		signInWithEmailAndPassword(email, password);
	};

	return (
		<div>
			<div className="container mx-auto flex justify-center items-center">
				<div className="border-2 w-[500px] my-20 p-4 rounded-md text">
					<h2 className="text-3xl text-center">Login</h2>
					<form onSubmit={handleSubmit} className="text-xl p-5">
						<div className="flex flex-col">
							<label htmlFor="">E-mail Address</label>
							<input
								onChange={(e) => setEmail(e.target.value)}
								name="email"
								className="border-2 rounded p-2"
								type="email"
								placeholder="E-mail Address"
							/>
							<span className="text-red-500 text-sm">{emailError}</span>
						</div>
						<div className="flex flex-col mt-4">
							<label htmlFor="">Password</label>
							<input
								name="password"
								className="border-2 rounded p-2"
								type="password"
								placeholder="Password"
							/>
							<span className="text-red-500 text-sm">
								{passwordError}
							</span>
						</div>
						<input
							className="w-full bg-slate-800 text-white py-2 rounded mt-4 cursor-pointer"
							type="submit"
							value="Login"
						/>
						<small className="mt-2">
							No account yet?{" "}
							<Link className="text-blue-700" to="/register">
								Register
							</Link>
						</small>
					</form>
					<div className="mb-6">
						<small className="mt-2 block">
							<button
								onClick={async () => {
									if (!email) {
										setEmailError("Email address must be provide!");
										return;
									}
									await sendPasswordResetEmail(email);
									alert("Sent email");
								}}
								className="text-red-500 text-lg ml-6"
								to="/register"
							>
								Forgot Password
							</button>
						</small>
					</div>

					<div className="mx-auto">
						<SocialLogin></SocialLogin>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
