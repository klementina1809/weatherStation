import React from "react";
import WeatherItem from "./WeatherItem";

function CurrentWeather(props) {
	const { currentWeather } = props;
	const takeTime = (unix_data) => {
		var date = new Date(unix_data * 1000);
		var hours = date.getHours();
		var minutes = date.getMinutes();
		return `${hours}:${minutes}`;
	};
	return (
		<>
			<WeatherItem
				label="Temperature"
				value={currentWeather.temp}
				unit=" °C"
				icon="./assets/icons/primary/fluent_temperature-16-regular.png"
			/>

			<WeatherItem
				label="Wind"
				value={currentWeather.wind_speed}
				unit=" m/s"
				icon="./assets/icons/primary/mingcute_wind-line.png"
			/>

			<WeatherItem
				label="Humidity"
				value={currentWeather.humidity}
				unit=" %"
				icon="./assets/icons/primary/carbon_humidity.png"
			/>

			<WeatherItem
				label="UV"
				value={currentWeather.uvi}
				unit="/ 11"
				icon="./assets/icons/primary/tabler_sun.png"
			/>

			<WeatherItem
				label="Sunrise"
				value={takeTime(currentWeather.sunrise)}
				unit=""
				icon="./assets/icons/primary/tabler_sunrise.png"
			/>

			<WeatherItem
				label="Feels Like"
				value={currentWeather.feels_like}
				unit=" °C"
				icon="./assets/icons/primary/carbon_temperature-feels-like.png"
			/>

			<WeatherItem
				label="Clouds"
				value={currentWeather.clouds}
				unit=" %"
				icon="./assets/icons/primary/uil_clouds.png"
			/>

			<WeatherItem
				label="Visibility"
				value={currentWeather.visibility / 1000}
				unit=" km"
				icon="./assets/icons/primary/material-symbols_visibility-outline.png"
			/>

			<WeatherItem
				label="Pressure"
				value={currentWeather.pressure}
				unit=" hPa"
				icon="./assets/icons/primary/carbon_pressure.png"
			/>

			<WeatherItem
				label="Sunset"
				value={takeTime(currentWeather.sunset)}
				unit=""
				icon="./assets/icons/primary/tabler_sunset.png"
			/>
		</>
	);
}

export default CurrentWeather;
