import axios from "axios";

const OW_API_KEY = "b6622b896ab943406fc69564b5cba66f";
const GC_API_KEY = "65b7641315a80718705722pkl192952";

export const getWeather = async (lat = 43.471199, lon = 11.86306) => {
	const response = await axios.get(
		`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${OW_API_KEY}`
	);
	return response.data ?? {};
};

// export const getGeoInfo = async (city = "Arezzo") => {
// 	const response = await axios.get(
// 		`https://geocode.maps.co/search?city=${city}&api_key=${GC_API_KEY}`
// 	);
// 	if (response.data.length === 0) return {};
// 	else {
// 		const lat = response.data[0].lat;
// 		const lon = response.data[0].lon;
// 		const data = [lat, lon];
// 		return data;
// 	}
// };
export const getGeoInfo = async (city = "Arezzo") => {
	const response = await axios.get(
		`https://geocode.maps.co/search?city=${city}&api_key=${GC_API_KEY}`
	);
	console.log("response.data", response.data);
	if (response.data.length === 0) return {};
	else {
		let options = [];
		response.data.map((ob) => {
			const parts = ob.display_name.split(",");
			const name = [parts[0], parts[1], parts[parts.length - 1]].join(
				","
			);
			options.push({
				id: ob.place_id,
				name: name,
				lat: ob.lat,
				lon: ob.lon,
			});
		});
		console.log("options", options);
		return options;
	}
};
