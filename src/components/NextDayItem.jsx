import React from "react";

function NextDayItem(props) {
	const { day, max, min, icon} = props;

	return (
		<div className="next-item">
			<span>{day}</span>
			<img src={`/src/assets/icons/weather/${icon}.png`} alt="" />
			<span>{max}° {min}°</span>
		</div>
	);
}

export default NextDayItem;
