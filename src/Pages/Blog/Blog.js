import React from "react";

const Blog = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto">
				<div className="w-1/2 mx-auto bg-red-200 p-4 rounded-lg">
					<h2 className="text-2xl underline">
						1. What Difference between authorization and authentication?
					</h2>
					<p className="text-lg mt-3">
						<span className="font-semibold">Ans: </span> Authentication Is
						to determine the identity of a person. Like us This is the way
						I login or register on different websites Being
						Authentication. <br /> Authorization is a person After
						determining his identity, he will be given access somewhere.
					</p>
				</div>
				<div className="w-1/2 mx-auto bg-blue-200 mt-8 p-4 rounded-lg">
					<h2 className="text-2xl underline">
						2. Why are you using firebase? What other options do you have
						to implement authentication?
					</h2>
					<p className="text-lg mt-3">
						<span className="font-semibold">Ans: </span>
						Firebase is basically a website used by one person To register
						or login. Moreover, there are many more benefits Using
						firebase. For example, we host our website Can via firebase.
						<br />
						We do authentication on many more websites besides firebase I
						can. Among them are Okta, Keycloak, MongoDB and many more.
					</p>
				</div>
				<div className="w-1/2 mx-auto bg-orange-200 mt-8 p-4 rounded-lg">
					<h2 className="text-2xl underline">
						3. What other services does firebase provide other than
						authentication?
					</h2>
					<p className="text-lg mt-3">
						<span className="font-semibold">Ans: </span>
						Without authentication, firebase provides many more services.
						For example: <br /> 1. The website can be hosted through
						firebase. <br /> 2. Firebase can be used as a database. <br />
						3. With Analytics Firebase can be used in different ways.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Blog;
