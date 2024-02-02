import React from "react";
import "../styles/inputStyle.css";

function Input(props) {
	const { onchange, value, label, placeholder} = props;

	return (
		<div>
			{/* <div>{label}</div> */}
			
				<input
					type="text"
					onChange={onchange}
					value={value}
          placeholder={placeholder}
				/>
			
		</div>
	);
}

export default Input;
