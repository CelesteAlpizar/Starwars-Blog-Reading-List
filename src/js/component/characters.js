import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import starWarsLogo from "../../img/star-wars-logo.png";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<h1>Characters</h1>
			<div className="card">
				<img src={starWarsLogo} className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
				</div>
			</div>
		</div>
	);
};
