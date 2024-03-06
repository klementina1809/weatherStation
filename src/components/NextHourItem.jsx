import React from "react";
import { Panel } from "@egjs/react-flicking";

function NextHourItem(props) {
	const { hour, temp, icon } = props;

	return (
		<div className="next-item hour">
			<span>{hour}:00</span>
			<img src={`./assets/icons/weather/${icon}.png`} alt="" />
			<span>{temp}°</span>
		</div>
	);
}

export default NextHourItem;
