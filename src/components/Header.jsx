import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

import "../styles/headerStyle.css";

function Header() {
	return (
		<Container>
			<Row>
				<Col sm={12}>
					<ul className="navbar">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/page2">Page2</NavLink>
						</li>
						<li>
							<NavLink to="/next-week">Next Week</NavLink>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default Header;
