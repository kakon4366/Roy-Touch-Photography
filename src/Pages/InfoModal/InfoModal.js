import React from "react";

const InfoModal = ({ fullName }) => {
	return (
		<div className="h-[700px] container mx-auto flex justify-center items-center">
			<h2 className="text-6xl text-green-500 font-semibold">
				Thank For Booking
			</h2>
			<p>{fullName}</p>
		</div>
	);
};

export default InfoModal;
<h2>This is INfo Modal Page</h2>;
