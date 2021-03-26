import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";

export const Home = () => (
	<div className="container">
		<div className="row">
			<div className="col-6">
				<div className="card" style={{ width: "18rem" }}>
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
						<Link to="/characters">
							<button className="btn btn-primary">Go somewhere</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="col-6">
				<div className="card" style={{ width: "18rem" }}>
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
						<Link to="/planets">
							<button className="btn btn-primary">Go somewhere</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
);
