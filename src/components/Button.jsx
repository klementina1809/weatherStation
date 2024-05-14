import React from "react";

function Button(props) {
	const { onClick, label, className } = props;

	return (
		<>
			<button onClick={onClick} className={className}>
				{label}
			</button>
		</>
	);
}

export default Button;
