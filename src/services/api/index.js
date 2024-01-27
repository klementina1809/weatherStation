import axios from "axios";

const API_URL = "https://dummyjson.com";

export const getProducts = async () => {
	const response = await axios.get(`${API_URL}/products`);
	console.log('response',response)
	return response.data ?? [];
};
