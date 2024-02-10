import React from "react";
import { useState, useEffect } from "react";
import { getWeather, getGeoCode } from "../services/api";
import { Row, Col } from "react-grid-system";

import Input from "../components/Input";
import Button from "../components/Button";
import CurrentWeather from "../components/CurrentWeather";
import NextBox from "../components/NextBox";

function Weather() {
	const [geocode, setGeocode] = useState([]);
	const [value, setValue] = useState("");
	const [city, setCity] = useState("");
	const [weather, setWeather] = useState({
		current: {
			sunrise: "",
			sunset: "",
			temp: 0,
			pressure: 0,
			humidity: 0,
			clouds: 0,
			uvi: 0,
			visibility: 0,
			wind_speed: 0,
		},
	});
	const [loading, setLoading] = useState(false);

	const inputHandler = (e) => {
		setValue(e.target.value);
	};

	const searchWeather = () => {
		setCity(value);
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
			console.log("w", weather);
			setWeather(weather);
			setLoading(false);
		}

		if (geocode[0] !== 0 && geocode[1] !== 0) secondApi();
	}, [geocode]);

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			searchWeather();
		}
	};

	return (
		<>
			<Row className="center">
				<Col sm={8} className="input-container">
					<Input
						onchange={inputHandler}
						value={value}
						placeholder="Enter your city..."
						onKeyDown={handleKeyPress}
					/>
					<Button
						className="btn"
						onClick={searchWeather}
						label="Search"
					/>
				</Col>
			</Row>
			<Row className="center">
				{loading && (
					<img
						className="loading"
						src="/src/assets/loading.gif"
						alt=""
					/>
				)}
			</Row>
			{geocode.length > 0 && !loading && (
				<>
					<Row className="center">
						<h1>Current Weather in <u>{city.charAt(0).toUpperCase() + city.slice(1)}</u></h1>
						<Col sm={8} className="weather-items-container">
							<CurrentWeather currentWeather={weather.current} />
						</Col>
					</Row>
					<Row className="center">
						<Col sm={8}>
							<h2>Next 48 hours</h2>
							<NextBox item='hour' data={weather.hourly}/>
						</Col>
					</Row>
					<Row className="center">
						<Col sm={8}>
							<h2>Next week</h2>
							<NextBox item='day' data={weather.daily}/>
						</Col>
					</Row>
				</>
			)}
		</>
	);
}

export default Weather;
