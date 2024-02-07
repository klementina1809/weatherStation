import axios from "axios";

const API_URL = "https://dummyjson.com";
const OW_API_KEY = "b6622b896ab943406fc69564b5cba66f";
const GC_API_KEY = "65b7641315a80718705722pkl192952";

export const getProducts = async () => {
	const response = await axios.get(`${API_URL}/products`);
	return response.data ?? [];
};

export const getWeather = async (lat = 43.471199, lon = 11.86306) => {
	const response = await axios.get(
		`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${OW_API_KEY}`
	);
	return response.data ?? {};
};

export const getGeoCode = async (city = "Arezzo") => {
	const response = await axios.get(
		`https://geocode.maps.co/search?city=${city}&api_key=${GC_API_KEY}`
	);
	// console.log('response.data[0].lat',response.data[0].lat)
	if (response.data.length === 0) return {};
	else {
		const lat = response.data[0].lat;
		const lon = response.data[0].lon;
		const data = [lat, lon];
		return data;
	}
};
