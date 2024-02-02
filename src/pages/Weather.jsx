import React from "react";
import { useState, useEffect } from "react";
import { getWeather, getGeoCode } from "../services/api";

function Weather() {
	const [geocode, setGeocode] = useState([0, 0]);
	const [weather, setWeather] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function getFirstData() {
			const geo = await getGeoCode("Milano");
			console.log("geo", geo);
			setGeocode(geo);
		}
		setLoading(true);

		getFirstData();
	}, []);

	useEffect(() => {
		async function secondApi() {
			const weather = await getWeather(geocode[0], geocode[1]);
			console.log("w", weather);
			setWeather(weather);
			setLoading(false);
		}

		if (geocode[0] !== 0 && geocode[1] !== 0) secondApi();
	}, [geocode]);

	return <div></div>;
}

export default Weather;
