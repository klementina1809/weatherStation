import React from "react";
import { Row, Col } from "react-grid-system";


import WeatherItem from "./WeatherItem";
import "../styles/inputStyle.css";

function CurrentWeather(props) {

	return (
		<Row>
			<Col sm={4}>
				<WeatherItem label="temperatura" value="20" unit="C" />
			</Col>
			<Col sm={4}>
				<WeatherItem label="feels_like" value="22" unit="C" />
			</Col>
			<Col sm={4}>
				<WeatherItem label="pressure" value="1029" unit="Hec" />
			</Col>
			<Col sm={4}>
				<WeatherItem label="humidity" value="10" unit="%" />
			</Col>
			<Col sm={4}>
				<WeatherItem
					label="clouds"
					value="10"
					unit="%"
					icon='FaCloud'
				/>
			</Col>
			<Col sm={4}>
				<WeatherItem label="wind_speed" value="5" unit="m/s" />
			</Col>
		</Row>
	);
}

export default CurrentWeather;
