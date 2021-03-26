import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
// import starWarsLogo from "../../img/star-wars-logo.png";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	return <h2>Hello?</h2>;
};
