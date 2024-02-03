import React from "react";


function Input(props) {
	const { onchange, value, label, placeholder } = props;

	return (
		<input
			type="text"
			onChange={onchange}
			value={value}
			placeholder={placeholder}
		/>
	);
}

export default Input;
