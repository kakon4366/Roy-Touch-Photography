import React from "react";

const Event = ({ event, handleBooking }) => {
	const { id, name, img, text, price } = event;

	return (
		<div className="border border-slate-400 p-2 rounded-lg hover:-translate-y-4 transition-all">
			<img width="100%" src={img} alt="" />
			<h2 className="text-2xl mt-4">{name}</h2>
			<p>{text}</p>
			<h4 className="text-3xl mt-2">
				Price: $<span>{price}</span>
			</h4>
			<button
				onClick={() => handleBooking(id)}
				className="bg-slate-800 text-white py-3 w-full rounded mt-6"
			>
				Booking Now
			</button>
		</div>
	);
};

export default Event;
