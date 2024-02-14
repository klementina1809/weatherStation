import React from "react";
import { useEffect } from "react";
import AsyncSelect from "react-select/async";
import { getGeoCode } from "../services/api";
import { useDebounce } from "../hooks/hooks";

function CustomSelect(props) {
	const { onchange, inputValue, placeholder, options } = props;

	const debouncedSearch = useDebounce(inputValue);

	useEffect(() => {
		const getGeoData = async () => {
			const geo = await getGeoCode(debouncedSearch);
			console.log("geo-----", geo);
			return geo.map((ob) => ({ value: ob, label: ob }));
		};
		getGeoData();
	}, [debouncedSearch]);


	const loadOptions = (inputValue) =>
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(getGeoData(inputValue));
			}, 1000);
		});

	// async function getGeoData(inputValue) {
	// 	const geo = await getGeoCode(inputValue);
	// 	console.log("geo-----", geo);
	// 	return geo.map((ob) => ({ value: ob, label: ob }));
	// }

	// const loadOptions = (inputValue) =>
	// 	new Promise((resolve) => {
	// 		setTimeout(() => {
	// 			resolve(getGeoData(inputValue));
	// 		}, 1000);
	// 	});

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
