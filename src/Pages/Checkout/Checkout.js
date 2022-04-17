import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
	const [events, setEvents] = useState([]);
	const { checkoutId } = useParams();

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/programming-hero-web-course-4/independent-service-provider-kakon4366/main/public/services.json?token=GHSAT0AAAAAABTFJSGMWIGZMTRZQRLLFB7MYS36LJQ"
		)
			.then((res) => res.json())
			.then((data) => setEvents(data));
	}, []);

	console.log(events);
	const checkoutEvent = events.find((event) => event.id === 1);
	console.log(checkoutEvent);

	return (
		<section>
			<div className="container">
				<div>
					<h2>This is Checkout Page here {checkoutId}</h2>
				</div>
				<div></div>
			</div>
		</section>
	);
};

export default Checkout;
