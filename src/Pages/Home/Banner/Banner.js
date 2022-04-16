import React from "react";
import bannerImage from "../../../images/banner.jpg";

const Banner = () => {
	return (
		<div className="">
			<img
				src={bannerImage}
				className="w-full h-[300px] object-cover md:h-auto"
				alt=""
			/>
		</div>
	);
};

export default Banner;
