import React from 'react';
import { useState } from "react";
import { useQuery } from "react-query";
import { getProducts, getWeather, getGeoCode } from "../services/api";

function Weather() {
  // const [geocode, setGeocode] = useState([]);

  const { isLoading } = useQuery({
		queryKey: "geocode",
		queryFn: () => getGeoCode('Milano'),
		onSuccess: (data) => {
			console.log("lat e lon", data);
			// setProducts(data.products);
		},
	});







  
  return (
    <div>
      
    </div>
  )
}

export default Weather
