import React from "react";
import google from "../../images/social/google.png";
import github from "../../images/social/github.png";
import facebook from "../../images/social/facebook.png";

const SocialLogin = () => {
	return (
		<div className="w-full border-2 p-5 rounded-lg">
			<button className="flex justify-center items-center mt-3 hover:bg-slate-200 border-2 w-full p-2 rounded">
				<img src={google} alt="" />
				<span className="ml-2">Login With Google</span>
			</button>
			<button className="flex justify-center hover:bg-slate-200 items-center mt-3 border-2 w-full p-2 rounded">
				<img src={github} alt="" />
				<span className="ml-2">Login With Github</span>
			</button>
			<button className="flex justify-center hover:bg-slate-200 items-center mt-3 border-2 w-full p-2 rounded">
				<img src={facebook} alt="" />{" "}
				<span className="ml-2">Login With Facebook</span>
			</button>
		</div>
	);
};

export default SocialLogin;
