import React from "react";

function WeatherItem(props) {
	const { label, value, unit, icon } = props;

	return (
		<div className="item-container">
			<div className="visual-container">
				<p>{label}</p>
				<div className="icon-wrapper"><img src={icon} alt="" /></div>
			</div>
			<div className="value-container">
				<p>{value}</p>
				<p>{unit}</p>
			</div>
		</div>
	);
}

export default WeatherItem;
