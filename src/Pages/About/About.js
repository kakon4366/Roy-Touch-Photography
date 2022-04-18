import React from "react";
import photo from "../../images/kakon.jpg";

const About = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto">
				<h2 className="text-5xl text-center ">About Me</h2>
				<div className="md:flex p-2 mt-8 w-full xl:w-2/3 mx-auto">
					<img
						className="w-full md:w-[400px] rounded-lg"
						src={photo}
						alt=""
					/>
					<div className="ml-6 mt-4 md:mt-0">
						<h3 className="text-3xl">Kakon Barman</h3>
						<h5 className="text-lg mb-4">Web Developer</h5>
						<p>
							My journey to become a web developer started in 2022. I
							want to see myself as a good web developer. I do not want
							to lose my hard work for this. I am always steadfast in my
							goals. I expect not only limited work but much more. I am
							ready to work hard. I want to be more focused on
							programming, not just web developers. So I think hard work
							will move me forward. Thanks
						</p>
						<button className="py-3 tex-lg px-12 bg-slate-800 text-white rounded mt-6">
							Learn More
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
