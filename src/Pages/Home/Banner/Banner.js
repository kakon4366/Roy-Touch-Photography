import React from "react";
import bannerImage from "../../../images/banner.jpg";

const Banner = () => {
	return (
		<div className="relative">
			<img
				src={bannerImage}
				className="w-full h-[300px] object-cover md:h-auto"
				alt=""
			/>
			<div className="absolute top-1/2 text-center block left-0 right-0 text-slate-200">
				<h2 className=" text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
					Roy Touch Photography
				</h2>
				<p className="text-sm lg:text-xl mt-4">
					Our main objective is to take the best quality pictures
				</p>
			</div>
		</div>
	);
};

export default Banner;
