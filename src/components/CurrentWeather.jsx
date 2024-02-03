import React from "react";
import WeatherItem from "./WeatherItem";

function CurrentWeather(props) {
	return (
		<>
			<h1>Current Weather in Florence</h1>
			<WeatherItem
				label="Temperature"
				value="20"
				unit="C"
				icon="/src/assets/icons/primary/fluent_temperature-16-regular.png"
			/>

			<WeatherItem
				label="Wind"
				value="6"
				unit="km/h"
				icon="/src/assets/icons/primary/mingcute_wind-line.png"
			/>

			<WeatherItem
				label="Humidity"
				value="67"
				unit="%"
				icon="/src/assets/icons/primary/carbon_humidity.png"
			/>

			<WeatherItem
				label="UV"
				value="2/11"
				unit=""
				icon="/src/assets/icons/primary/tabler_sun.png"
			/>

			<WeatherItem
				label="Sunrise"
				value="06:20"
				unit=""
				icon="/src/assets/icons/primary/tabler_sunrise.png"
			/>

			<WeatherItem
				label="Feels Like"
				value="22"
				unit="C"
				icon="/src/assets/icons/primary/carbon_temperature-feels-like.png"
			/>

			<WeatherItem
				label="Clouds"
				value="12"
				unit="%"
				icon="/src/assets/icons/primary/uil_clouds.png"
			/>

			<WeatherItem
				label="Visibility"
				value="10.27"
				unit="km"
				icon="/src/assets/icons/primary/material-symbols_visibility-outline.png"
			/>

			<WeatherItem
				label="Pressure"
				value="1029"
				unit="mb"
				icon="/src/assets/icons/primary/carbon_pressure.png"
			/>

			<WeatherItem
				label="Sunset"
				value="18:53"
				unit=""
				icon="/src/assets/icons/primary/tabler_sunset.png"
			/>
		</>
	);
}

export default CurrentWeather;
