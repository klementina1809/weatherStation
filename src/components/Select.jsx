import React from "react";
import AsyncSelect from "react-select/async";
import { getGeoCode } from "../services/api";

function CustomSelect(props) {
	const { onchange, inputValue, placeholder, options } = props;

	async function getGeoData(inputValue) {
		const geo = await getGeoCode(inputValue);
		console.log("geo-----", geo);
		return geo.map((ob) => ({ value: ob, label: ob }));
	}

	const loadOptions = (inputValue) =>
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(getGeoData(inputValue));
			}, 1000);
		});

	return (
		<AsyncSelect
			//onChange={onchange}
			cacheOptions
			defaultOptions
			placeholder={placeholder}
			isSearchable={true}
			loadOptions={loadOptions}
		/>
	);
}

export default CustomSelect;
