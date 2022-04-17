import { useEffect, useState } from "react";

const useEvents = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		fetch("services.json")
			.then((res) => res.json())
			.then((data) => setEvents(data));
	}, []);

	return [events, setEvents];
};

export default useEvents;
