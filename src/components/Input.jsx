import React from "react";

function Input(props) {
	const { onchange, value, label, placeholder, onKeyDown } = props;

	return (
		<input
			type="text"
			onChange={onchange}
			value={value}
			placeholder={placeholder}
			onKeyDown={onKeyDown}
		/>
	);
}

export default Input;
