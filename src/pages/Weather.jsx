import React from "react";
import { useState, useEffect } from "react";
import { getWeather, getGeoCode } from "../services/api";
import { Row, Col } from "react-grid-system";

import Input from "../components/Input";
import Button from "../components/Button";
import CurrentWeather from "../components/CurrentWeather";
import NextBox from "../components/NextBox";

function Weather() {
	const [geocode, setGeocode] = useState([0, 0]);
	const [value, setValue] = useState("");
	const [weather, setWeather] = useState({});
	const [loading, setLoading] = useState(false);

	const inputHandler = (e) => {
		setValue(e.target.value);
	};

	const searchWeather = () => {
		async function getFirstData() {
			const geo = await getGeoCode(value);
			console.log("geo", geo);
			setGeocode(geo);
		}
		setLoading(true);

		getFirstData();
	};

	useEffect(() => {
		async function secondApi() {
			const weather = await getWeather(geocode[0], geocode[1]);
			console.log("w curent ", weather.current);
			setWeather(weather);
			setLoading(false);
		}

		if (geocode[0] !== 0 && geocode[1] !== 0) secondApi();
	}, [geocode]);

	return (
		<>
			<Row className="center">
				<Col sm={8} className="input-container">
					<Input
						onchange={inputHandler}
						value={value}
						placeholder="Enter your city..."
					/>
					<Button
						className="btn"
						onClick={searchWeather}
						label="Search"
					/>
					{loading && <span>loading</span>}
				</Col>
			</Row>
			<Row className="center">
				<Col sm={8} className="weather-items-container">
					<CurrentWeather currentWeather={weather.current} />
				</Col>
			</Row>
			<Row className="center">
				<Col sm={8}>
					<h2>Next 48 hours</h2>
					<NextBox />
				</Col>
			</Row>
			<Row className="center">
				<Col sm={8}>
					<h2>Next week</h2>
					<NextBox />
				</Col>
			</Row>
		</>
	);
}

export default Weather;
