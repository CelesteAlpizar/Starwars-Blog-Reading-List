import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/star-wars-logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1" href="#">
					<img src={starWarsLogo} alt="" width="180" height="" />
				</span>
			</Link>
			<Link to="/characters">
				<a
					className="nav-link active"
					aria-current="page"
					href="#"
					style={{ color: "#dba90d", fontWeight: "bolder", fontSize: "20px" }}>
					Characters
				</a>
			</Link>
			<Link to="/planets">
				<a
					className="nav-link active"
					aria-current="page"
					href="#"
					style={{ color: "#dba90d", fontWeight: "bolder", fontSize: "20px" }}>
					Planets
				</a>
			</Link>
			<div className="ml-auto " style={{ float: "right" }}>
				<Link to="/demo">
					<button className="btn btn-outline-warning" style={{ fontWeight: "bold" }}>
						Favorites
					</button>
				</Link>
			</div>
		</nav>
	);
};
