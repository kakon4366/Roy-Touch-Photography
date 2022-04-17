import React, { useEffect, useState } from "react";

const Gallery = () => {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		fetch("event-photos.json")
			.then((res) => res.json())
			.then((data) => setPhotos(data));
	}, []);

	return (
		<section className="pb-20">
			<div className="container mx-auto">
				<h3 className="text-4xl text-center">Gallery</h3>
				<div className="grid grid-cols-3 gap-12 mt-12">
					{photos.map((photo) => (
						<img
							className="rounded-xl border-2 p-2"
							src={photo.photo}
							key={photo.id}
							alt=""
						></img>
					))}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
