import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
	const handleRegisterSubmit = (e) => {
		e.preventDefault();
		alert("Working...");
	};
	return (
		<div>
			<div className="container mx-auto flex justify-center items-center">
				<div className="flex justify-center items-center">
					<div className="border-2 w-[450px] my-20 p-4 m-2 rounded-md">
						<h2 className="text-3xl text-center">Login</h2>
						<form onSubmit={handleRegisterSubmit} className="text-xl p-5">
							<div className="flex flex-col">
								<label htmlFor="">Full Name</label>
								<input
									className="border-2 rounded p-2"
									type="text"
									placeholder="Full Name"
								/>
								<span className="text-red-500 text-sm">
									Error Message
								</span>
							</div>
							<div className="flex flex-col mt-2">
								<label htmlFor="">E-mail Address</label>
								<input
									className="border-2 rounded p-2"
									type="email"
									placeholder="E-mail Address"
								/>
								<span className="text-red-500 text-sm">
									Error Message
								</span>
							</div>
							<div className="flex flex-col mt-2">
								<label htmlFor="">Password</label>
								<input
									className="border-2 rounded p-2"
									type="password"
									placeholder="Password"
								/>
								<span className="text-red-500 text-sm">
									Error Message
								</span>
							</div>
							<div className="flex flex-col mt-2">
								<label htmlFor="">Confirm Password</label>
								<input
									className="border-2 rounded p-2"
									type="password"
									placeholder="Confirm Password"
								/>
								<span className="text-red-500 text-sm">
									Error Message
								</span>
							</div>
							<input
								className="w-full bg-slate-800 text-white py-2 rounded mt-4 cursor-pointer"
								type="submit"
								value="Login"
							/>
						</form>
					</div>
					<span>or</span>
					<div className="ml-2 w-[350px]">
						<SocialLogin></SocialLogin>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;