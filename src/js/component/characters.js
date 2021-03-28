import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import characterImg from "../../img/character.jpg";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<h1
				className="text-center"
				style={{
					color: "#dba90d",
					fontFamily: "fantasy",
					fontSize: "60px",
					textShadow: "3px 5px 7px rgba(0,0,0,0.3)"
				}}>
				Characters:
			</h1>
			<div className="card-columns">
				{store.characters.map((character, index) => {
					return (
						<div className="card text-white" key={index}>
							<img src={characterImg} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title mb-2">{character.name}</h5>
								<p className="card-text m-0">
									Gender:
									{" " + character.gender}
								</p>
								<p className="card-text m-0">
									Homeworld:
									{" " + character.homeworld}
								</p>
								<Link to={"/characters/" + index}>
									<button className="btn btn-outline-warning mt-2">Learn more!</button>
								</Link>
								<Link to="/">
									<button className="btn btn-outline-warning mt-2 " style={{ float: "right" }}>
										<i className="fas fa-star" />
									</button>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
