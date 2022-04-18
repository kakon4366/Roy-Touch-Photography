import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });
	return (
		<div className="mb-4 lg:mb-0 lg:flex items-center">
			<Link
				style={{
					color: match ? "#F74F4F" : "",
				}}
				to={to}
				{...props}
			>
				{children}
			</Link>
			{/* {match && ")"} */}
		</div>
	);
};

export default CustomLink;
