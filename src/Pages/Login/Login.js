import React from "react";

const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<div className="container mx-auto flex justify-center items-center">
				<div className="border-2 w-[500px] my-20 p-4 rounded-md">
					<h2 className="text-3xl text-center">Login</h2>
					<form onSubmit={handleSubmit} className="text-xl p-5">
						<div className="flex flex-col">
							<label htmlFor="">E-mail Address</label>
							<input
								className="border-2 rounded p-2"
								type="email"
								placeholder="E-mail Address"
							/>
							<span className="text-red-500 text-sm">Error Message</span>
						</div>
						<div className="flex flex-col mt-4">
							<label htmlFor="">Password</label>
							<input
								className="border-2 rounded p-2"
								type="password"
								placeholder="Password"
							/>
							<span className="text-red-500 text-sm">Error Message</span>
						</div>
						<input
							className="w-full bg-slate-800 text-white py-2 rounded mt-4 cursor-pointer"
							type="submit"
							value="Login"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
