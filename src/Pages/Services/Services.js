import React, { useEffect, useState } from "react";
import Event from "./Event/Event";

const Services = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		fetch("services.json")
			.then((res) => res.json())
			.then((data) => setEvents(data));
	}, []);

	return (
		<section className="py-20">
			<div className="container mx-auto">
				<h3 className="text-4xl text-center">Best Services</h3>
				<div className="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
					{events.map((event) => (
						<Event event={event} key={event.id}></Event>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
