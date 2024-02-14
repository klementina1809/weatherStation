import React from "react";
import Select from "react-select/async";
import { getGeoCode } from "../services/api";
import debounce from "debounce-promise";

const getOptions = debounce(async (value) => {
	if (!value) {
		return Promise.resolve({ options: [] });
	}

	const response = await getGeoCode(value);
	return response.map((ob) => ({ value: ob, label: ob }));
}, 400);

function CustomSelect(props) {
	return <Select loadOptions={getOptions} />;
}

export default CustomSelect;
