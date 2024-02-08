import React from "react";

function WeatherItem(props) {
	const { label, value, unit, icon } = props;

	return (
		<div className="item-container">
			<div className="visual-container">
				<span>{label}</span>
				<div className="icon-wrapper"><img src={icon} alt="" /></div>
			</div>
			<div className="value-container">
				<span>{value}</span>
				<span>{unit}</span>
			</div>
		</div>
	);
}

export default WeatherItem;
