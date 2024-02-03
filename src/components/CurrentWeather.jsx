import React from "react";
import { Row, Col } from "react-grid-system";


import WeatherItem from "./WeatherItem";
import "../styles/inputStyle.css";

function CurrentWeather(props) {

	return (
		<div className="weather-items-container">
			<div>
				<WeatherItem label="Temperature" value="20" unit="C" icon='/src/assets/icons/primary/fluent_temperature-16-regular.png'/>
			</div>
			<div>
				<WeatherItem label="Wind" value="6" unit="km/h" icon='/src/assets/icons/primary/mingcute_wind-line.png' />
			</div>
			<div>
				<WeatherItem label="Humidity" value="67" unit="%" icon='/src/assets/icons/primary/carbon_humidity.png'/>
			</div>
			<div>
				<WeatherItem label="UV" value="2/11" unit="" icon='/src/assets/icons/primary/tabler_sun.png' />
			</div>
			<div>
				<WeatherItem label="Sunrise" value="06:20" unit="" icon='/src/assets/icons/primary/tabler_sunrise.png'/>
			</div>


			<div>
				<WeatherItem label="Feels Like" value="22" unit="C" icon='/src/assets/icons/primary/carbon_temperature-feels-like.png'/>
			</div>
			
			<div>
				<WeatherItem
					label="Clouds"
					value="12"
					unit="%"
					icon='/src/assets/icons/primary/uil_clouds.png'
					
				/>
			</div>
			
			<div>
				<WeatherItem label="Visibility" value="10.27" unit="km" icon='/src/assets/icons/primary/material-symbols_visibility-outline.png'/>
			</div>
			<div>
				<WeatherItem label="Pressure" value="1029" unit="mb" icon='/src/assets/icons/primary/carbon_pressure.png'/>
			</div>
			<div>
				<WeatherItem label="Sunset" value="18:53" unit="" icon='/src/assets/icons/primary/tabler_sunset.png'/>
			</div>
		</div>
	);
}

export default CurrentWeather;
