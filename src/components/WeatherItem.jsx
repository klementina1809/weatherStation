import React from "react";
import { FaCloud } from "react-icons/fa";

import "../styles/inputStyle.css";

function WeatherItem(props) {
	const { label, value, unit, icon } = props;

	return (
		<div>
			<p>{icon}</p>
			<p>{label}</p>
			<p>{value}</p>
			<p>{unit}</p>
		</div>
	);
}

export default WeatherItem;
