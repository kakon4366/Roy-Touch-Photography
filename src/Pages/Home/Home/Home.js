import React from "react";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Services></Services>
			<Gallery></Gallery>
		</div>
	);
};

export default Home;
