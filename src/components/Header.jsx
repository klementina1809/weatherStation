import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

function Header() {
	return (
		<Container>
			<Row>
				<Col sm={12}>
					<header>
						<ul>
							<li>
								<NavLink to="/">Page1</NavLink>
							</li>
							<li>
								<NavLink to="/page2">Page2</NavLink>
							</li>
						</ul>
					</header>
				</Col>
			</Row>
		</Container>
	);
}

export default Header;
