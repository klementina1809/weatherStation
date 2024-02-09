import React from "react";
import NextDayItem from "./NextDayItem";

function NextBox(props) {
	const { item, data } = props;

	const getWeekDay = (unix_data) => {
		const date = new Date(unix_data * 1000);
		const weekDayNumber = date.getDay();
		// Преобразование числа дня недели в соответствующее название
		const weekDays = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		const weekDayName = weekDays[weekDayNumber];
		return weekDayName;
	};
	const roundToInteger = (number) => {
		return Math.round(number);
	};

	return (
		<div className="next-container">
			{item === "day" &&
				data
					.slice(1)
					.map((day) => (
						<NextDayItem
							key={day.dt}
							day={getWeekDay(day.dt)}
							max={roundToInteger(day.temp.max)}
							min={roundToInteger(day.temp.min)}
							icon={day.weather[0].icon}
						/>
					))}
		</div>
	);
}

export default NextBox;
