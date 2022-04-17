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
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Nemo, maxime natus itaque eius minus ducimus laudantium
							sequi temporibus repellendus tempora eligendi, quisquam hic
							omnis, exercitationem aspernatur commodi enim.
							Necessitatibus, voluptas neque itaque molestiae tempora
							blanditiis illo dolorum doloremque omnis et ea, maxime
							eveniet repellendus enim, tenetur sint perferendis?
							Obcaecati, saepe.
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
