import React from "react";
import Footer from "../Footer/Footer.jsx";
import Home from "../Home/Home.jsx";
import Nav from "../Nav/Nav.jsx";

const Layout = () => {
	return (
		<div className="text-center p-4">
			<h2>Layout</h2>
			<Nav />
			<Home />
			<Footer />
		</div>
	);
};

export default Layout;
