import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<ul className="flex gap-4">
				<li>
					<Link to="/">Inicio</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
