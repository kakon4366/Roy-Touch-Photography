import React, { useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const Register = () => {
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [conPasswordError, setConPasswordError] = useState("");

	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const navigate = useNavigate();

	if (loading) {
		return <Loading></Loading>;
	}

	const handleRegisterSubmit = (e) => {
		e.preventDefault();

		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const confirmPassword = e.target.confirmpassword.value;

		//validation
		if (!name) {
			setNameError("Name must be required!");
			return;
		} else if (!email) {
			setEmailError("Email Address must be required!");
			setNameError("");
			return;
		} else if (!password) {
			setPasswordError("Password must be required!");
			setEmailError("");
			return;
		} else if (password.length < 6) {
			setPasswordError("Password length will be 6");
			return;
		} else {
			setPasswordError("");
		}

		if (password !== confirmPassword) {
			setConPasswordError("Confirm password is not match!");
		}

		createUserWithEmailAndPassword(email, password);
		navigate("/home");
	};

	return (
		<div>
			<div className="container mx-auto flex justify-center items-center">
				<div className="lg:flex justify-center items-center">
					<div className="border-2 w-full lg:w-[450px]  lg:my-20 p-2 lg:p-4 m-2 rounded-md">
						<h2 className="text-3xl text-center">Register</h2>
						<form
							onSubmit={handleRegisterSubmit}
							className="text-xl lg:p-5"
						>
							<div className="flex flex-col">
								<label htmlFor="">Full Name</label>
								<input
									name="name"
									className="border-2 rounded p-2"
									type="text"
									placeholder="Full Name"
								/>
								<span className="text-red-500 text-sm">
									{nameError}
								</span>
							</div>
							<div className="flex flex-col mt-2">
								<label htmlFor="">E-mail Address</label>
								<input
									name="email"
									className="border-2 rounded p-2"
									type="email"
									placeholder="E-mail Address"
								/>
								<span className="text-red-500 text-sm">
									{emailError}
								</span>
							</div>
							<div className="flex flex-col mt-2">
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
							<div className="flex flex-col mt-2">
								<label htmlFor="">Confirm Password</label>
								<input
									name="confirmpassword"
									className="border-2 rounded p-2"
									type="password"
									placeholder="Confirm Password"
								/>
								<span className="text-red-500 text-sm">
									{conPasswordError}
								</span>
							</div>
							<input
								className="w-full bg-slate-800 text-white py-2 rounded mt-4 cursor-pointer"
								type="submit"
								value="Register"
							/>
							<small className="mt-2">
								Already have an account?{" "}
								<Link className="text-blue-700" to="/login">
									Login
								</Link>
							</small>
						</form>
					</div>
					<span className="block text-center mb-3">or</span>
					<div className="ml-2 w-full lg:w-[350px]">
						<SocialLogin></SocialLogin>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
