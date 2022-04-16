import React from "react";
import logo from "../../../images/dark-logo.png";

const Header = () => {
	return (
		<header>
			<div className="container mx-auto">
				<nav>
					<div>
						<img width="250px" src={logo} alt="" />
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
