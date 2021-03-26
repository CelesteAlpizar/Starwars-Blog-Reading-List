import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/star-wars-logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1" href="#">
					<img src={starWarsLogo} alt="" width="160" height="" />
				</span>
			</Link>
			<Link to="/characters">
				<a
					className="nav-link active"
					aria-current="page"
					href="#"
					style={{ color: "#dba90d", fontFamily: "fantasy" }}>
					Characters
				</a>
			</Link>
			<Link to="/planets">
				<a className="nav-link active" aria-current="page" href="#" style={{ color: "#dba90d" }}>
					Planets
				</a>
			</Link>
			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
		</nav>
	);
};
