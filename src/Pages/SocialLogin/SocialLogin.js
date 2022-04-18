import React from "react";
import google from "../../images/social/google.png";
import github from "../../images/social/github.png";
import facebook from "../../images/social/facebook.png";
import {
	useSignInWithFacebook,
	useSignInWithGithub,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SocialLogin = () => {
	const [signInWithGithub, githubUser] = useSignInWithGithub(auth);
	const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
	const [signInWithFacebook, facebookUser] = useSignInWithFacebook(auth);

	const navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	if (googleUser || githubUser || facebookUser) {
		navigate(from, { replace: true });
	}

	return (
		<div className="w-full border-2 p-5 rounded-lg">
			<button
				onClick={() => {
					signInWithGoogle();
					toast("Login Success!");
				}}
				className="flex justify-center items-center mt-3 hover:bg-slate-200 border-2 w-full p-2 rounded"
			>
				<img src={google} alt="" />
				<span className="ml-2">Login With Google</span>
			</button>
			<button
				onClick={() => signInWithGithub()}
				className="flex justify-center hover:bg-slate-200 items-center mt-3 border-2 w-full p-2 rounded"
			>
				<img src={github} alt="" />
				<span className="ml-2">Login With Github</span>
			</button>
			<button
				onClick={() => signInWithFacebook()}
				className="flex justify-center hover:bg-slate-200 items-center mt-3 border-2 w-full p-2 rounded"
			>
				<img src={facebook} alt="" />{" "}
				<span className="ml-2">Login With Facebook</span>
			</button>
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default SocialLogin;
