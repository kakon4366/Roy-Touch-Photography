import React from "react";
import { useNavigate } from "react-router-dom";
import useEvents from "../../Hooks/useEvents";
import Event from "./Event/Event";

const Services = () => {
	const [events] = useEvents([]);
	const navigate = useNavigate();

	const handleBooking = (id) => {
		navigate("/checkout/" + id);
	};

	return (
		<section className="py-20">
			<div className="container mx-auto">
				<h3 className="text-4xl text-center">Best Services</h3>
				<div className="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
					{events.map((event) => (
						<Event
							event={event}
							handleBooking={handleBooking}
							key={event.id}
						></Event>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
