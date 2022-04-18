import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
	const [events, setEvents] = useState([]);
	const { checkoutId } = useParams();

	useEffect(() => {
		fetch(process.env.PUBLIC_URL + "/services.json")
			.then((res) => res.json())
			.then((data) => setEvents(data));
	}, []);

	const checkoutEvent = events.find(
		(event) => event.id === parseInt(checkoutId)
	);

	return (
		<section className="my-20">
			<div className="container mx-auto">
				<div className="flex bg-slate-200 p-8 rounded-lg">
					<div className="w-52 h-52 border-2 border-slate-400 p-1 rounded-lg">
						<img
							className="w-full rounded-lg"
							src={checkoutEvent?.img}
							alt=""
						/>
					</div>
					<div className="ml-8">
						<h2 className="text-4xl">{checkoutEvent?.name}</h2>
						<p className="text-xl my-4">{checkoutEvent?.text}</p>
						<h4 className="text-5xl">
							Price: $<span>{checkoutEvent?.price}</span>
						</h4>
					</div>
				</div>
				<div></div>
			</div>
		</section>
	);
};

export default Checkout;
