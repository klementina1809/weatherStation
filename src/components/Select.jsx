import React from "react";
import Select from "react-select/async";
import { getGeoInfo } from "../services/api";
import debounce from "debounce-promise";

const selectStyles = {
	control: (baseStyles, state) => ({
		...baseStyles,
		borderColor: "red",
	}),
	menuList: (baseStyles) => ({
		...baseStyles,
		backgroundColor: "lightgray",
	}),
};

const getOptions = debounce(async (value) => {
	if (!value) {
		return Promise.resolve({ options: [] });
	}

	const response = await getGeoInfo(value);
	return response.map((ob) => ({ ...ob, value: ob.name, label: ob.name }));
}, 500);

function CustomSelect(props) {
	const { placeholder, onchange } = props;

	return (
		<Select
			styles={selectStyles}
			placeholder={placeholder}
			loadOptions={getOptions}
			onChange={onchange}
		/>
	);
}

export default CustomSelect;
