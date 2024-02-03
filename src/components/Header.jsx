import React from "react";

import { Row, Col } from "react-grid-system";

import "../styles/headerStyle.css";

function Header() {
	return (
		<Row>
			<div className="logo-container">
				<img src="/src/assets/logo.png" alt="Klementina_Weather" />
			</div>
		</Row>
	);
}

export default Header;
