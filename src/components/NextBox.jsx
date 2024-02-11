import React from "react";
import Flicking from "@egjs/react-flicking";


import NextDayItem from "./NextDayItem";
import NextHourItem from "./NextHourItem";

function NextBox(props) {
	const { item, data } = props;

	const getWeekDay = (unix_data) => {
		const date = new Date(unix_data * 1000);
		const weekDayNumber = date.getDay();
		// Преобразование числа дня недели в соответствующее название
		const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		const weekDayName = weekDays[weekDayNumber];
		return weekDayName;
	};
	const getHour = (unix_data) => {
		const date = new Date(unix_data * 1000);
		const hour = date.getHours();
		return hour;
	};
	const roundToInteger = (number) => {
		return Math.round(number);
	};

	return (
		<div className="next-container">
			{item === "day" && (
				<Flicking
					useFindDOMNode={true}
					align="prev"
					circular={false}
					bound={true}
					deceleration={0.0075}
				>
					{data.slice(1).map((day) => (
						<NextDayItem
							key={day.dt}
							day={getWeekDay(day.dt)}
							max={roundToInteger(day.temp.max)}
							min={roundToInteger(day.temp.min)}
							icon={day.weather[0].icon}
						/>
					))}
				</Flicking>
			)}
			{item === "hour" && (
				<Flicking
					useFindDOMNode={true}
					align="prev"
					circular={false}
					bound={true}
					deceleration={0.0075}
				>
					{data.map((hour) => (
						<NextHourItem
							key={hour.dt}
							hour={getHour(hour.dt)}
							temp={roundToInteger(hour.temp)}
							icon={hour.weather[0].icon}
						/>
					))}
				</Flicking>
			)}
		</div>
	);
}

export default NextBox;
