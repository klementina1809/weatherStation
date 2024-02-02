import React from "react";
import { useState, useEffect } from "react";
import { getWeather, getGeoCode } from "../services/api";
import { Container, Row, Col } from "react-grid-system";

import Input from "../components/Input";
import Button from "../components/Button";
import CurrentWeather from "../components/CurrentWeather";

import "../styles/inputStyle.css";

function Weather() {
	const [geocode, setGeocode] = useState([0, 0]);
	const [value, setValue] = useState("");
	const [weather, setWeather] = useState([]);
	const [cityName, setCityName] = useState("");
	const [loading, setLoading] = useState(false);

	const inputHandler = (e) => {
		setValue(e.target.value);
	};

	const searchWeather = () => {
		setCityName(value);
	};

	useEffect(() => {
		async function getFirstData() {
			const geo = await getGeoCode(cityName);
			console.log("geo", geo);
			setGeocode(geo);
		}
		setLoading(true);

		getFirstData();
	}, [cityName]);

	useEffect(() => {
		async function secondApi() {
			const weather = await getWeather(geocode[0], geocode[1]);
			console.log("w", weather);
			setWeather(weather);
			setLoading(false);
		}

		if (geocode[0] !== 0 && geocode[1] !== 0) secondApi();
	}, [geocode]);

	return (
		<Container>
			<Row>
				<Col sm={12} className="input-container">
					<Input
						onchange={inputHandler}
						value={value}
						placeholder="City"
					/>
					<Button onClick={searchWeather} label="Search" />
				</Col>
			</Row>
			<Row>
				<Col sm={12} className="input-container">
					<CurrentWeather />
				</Col>
			</Row>
		</Container>
	);
}

export default Weather;
