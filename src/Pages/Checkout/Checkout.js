import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import paypal from "../../images/paypal.png";
import visa from "../../images/visa.png";
import mastercard from "../../images/mastercard.png";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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

	const handleBillingInfo = (e) => {
		e.preventDefault();
		const fullName = e.target.name.value;
		// const address = e.target.address.value;
		// const zipcode = e.target.zipcode.value;
		// const phone = e.target.phone.value;

		toast(`Thanks For Booking Mr. ${fullName}`);
	};

	return (
		<section className="my-20">
			<div className="container mx-auto">
				<div className="grid xl:grid-cols-2 gap-8 xl:gap-12">
					<div className="bg-slate-200 p-4 rounded-lg sm:flex text-center">
						<div className="w-28 h-28 sm:w-52 sm:h-52 border-2 border-slate-400 p-1 rounded-lg mx-auto">
							<img
								className="w-full rounded-lg"
								src={checkoutEvent?.img}
								alt=""
							/>
						</div>
						<div className="sm:ml-8">
							<h2 className="text-2xl sm:text-3xl">
								{checkoutEvent?.name}
							</h2>
							<p className="text-lg sm:text-xl my-4">
								{checkoutEvent?.text}
							</p>
							<h4 className="text-xl sm:text-2xl">
								Price: $<span>{checkoutEvent?.price}</span>
							</h4>
							<div>
								<p className="text-lg sm:text-2xl mt-2">Day: </p>
							</div>
						</div>
					</div>
					<div className="bg-red-200 p-4 rounded-lg">
						<h2 className="text-3xl">Booking Summery</h2>
						<hr className="border-slate-400 my-3" />
						<p className="text-xl">
							Total Price: $<span>{checkoutEvent?.price}</span>
						</p>
						<p className="text-xl">
							Travel Fee: $
							<span>{Math.round(checkoutEvent?.price * 0.1)}</span>
						</p>
						<hr className="border-slate-400 my-3" />
						<p className="text-xl font-semibold">
							Grand Total: $
							<span>
								{checkoutEvent?.price +
									Math.round(checkoutEvent?.price * 0.1)}
							</span>
						</p>
					</div>
				</div>
				<div className="bg-blue-100 mt-8 p-8 rounded-lg">
					<h2 className="text-3xl">Checkout</h2>
					<div className="grid grid-cols-3 gap-4">
						<div className="mt-8 col-span-2">
							<h3 className="text-2xl">Billing Details</h3>
							<hr className="border-slate-400 my-4" />
							<form onSubmit={handleBillingInfo}>
								<div className="flex flex-col text-lg">
									<label htmlFor="name">Full Name:</label>
									<input
										placeholder="Full Name"
										name="name"
										className="border p-2 rounded"
										type="text"
									/>
								</div>
								<div className="flex flex-col text-lg mt-4">
									<label htmlFor="address">Address:</label>
									<input
										placeholder="Address"
										name="address"
										className="border p-2 rounded"
										type="text"
									/>
								</div>
								<div className="flex flex-col text-lg mt-4">
									<label htmlFor="zipcode">Zip Code:</label>
									<input
										placeholder="Zip Code"
										name="zipcode"
										className="border p-2 rounded"
										type="text"
									/>
								</div>
								<div className="flex flex-col text-lg mt-4">
									<label htmlFor="phone">Phone Number:</label>
									<input
										placeholder="Phone Number"
										name="phone"
										className="border p-2 rounded"
										type="text"
									/>
								</div>
								<input
									className="bg-slate-800 text-white py-3 px-8 rounded mt-8"
									type="submit"
									value="Save Infomation"
								/>
							</form>
							<ToastContainer />
						</div>
						<div className="mt-8">
							<h3 className="text-2xl">Payment Method</h3>
							<hr className="border-slate-400 my-4" />
							<div>
								<div>
									<input
										type="checkbox"
										id="handcash"
										name="handcash"
									/>
									<label className="ml-2" htmlFor="handcash">
										Hand Cash
									</label>
									<p className="p-4 bg-slate-300 mt-2 rounded">
										Pay With Hand Cash
									</p>
								</div>
								<div className="mt-8">
									<input
										type="checkbox"
										id="cardpayment"
										name="cardpayment"
									/>
									<label className="ml-2" htmlFor="cardpayment">
										Pay With Paypal/Master Card
									</label>
									<div className="flex mt-4">
										<img className="mr-2" src={paypal} alt="" />
										<img className="mr-2" src={visa} alt="" />
										<img className="mr-2" src={mastercard} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Checkout;
