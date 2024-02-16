import React from "react";
import Select from "react-select/async";
import { getGeoInfo } from "../services/api";
import debounce from "debounce-promise";

const selectStyles = {
	container: (baseStyles, state) => ({
		...baseStyles,
		// minWidth: 350,
		flex: 1,
		border: "none",
	}),
	control: (baseStyles, state) => ({
		...baseStyles,
		border: "none",
	}),
	input: (baseStyles, state) => ({
		...baseStyles,
		color: "var(--color-primary)",
	}),
	menuList: (baseStyles) => ({
		...baseStyles,
		backgroundColor: "white",
		border: "none",
		borderRadius: "8px",
		color: "var(--color-primary)",
	}),
	option: (baseStyles, state) => ({
		...baseStyles,
		backgroundColor: state.isFocused
			? "var(--color-primary-light)"
			: "white",
	}),
};

const getOptions = debounce(async (value) => {
	if (!value) {
		return Promise.resolve({ options: [] });
	}

	const response = await getGeoInfo(value);
	return response.map((ob) => ({ ...ob, value: ob.name, label: ob.name }));
}, 1000);

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
