import React from "react";
import AsyncSelect from "react-select/async";
// import Select from 'react-select'
import Async, { useAsync } from "react-select/async";

function CustomSelect(props) {
	const { onchange, inputValue, placeholder, options } = props;

	const formOptions = (options) => {
		return options.map((option) => ({
			value: option,
			label: option
		}));
	};

	const loadOptions = (inputValue, callback) => {
		setTimeout(() => {
			callback(formOptions(options));
		}, 1000);
	};

	return (
		<AsyncSelect
			onChange={onchange}
			value={inputValue}
			placeholder={placeholder}
			isSearchable={true}
			loadOptions={loadOptions}
		/>
	);
}

export default CustomSelect;
