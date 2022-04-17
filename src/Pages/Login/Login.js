import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	const navigate = useNavigate();

	if (loading) {
		return <Loading></Loading>;
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
			signInWithEmailAndPassword(email, password);
			if (!error) {
				alert("Hmmm eroor");
				return;
			}
			navigate("/home");
		}
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
					<div className="mx-auto">
						<SocialLogin></SocialLogin>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
