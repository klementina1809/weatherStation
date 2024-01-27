import React from "react";
import { Container, Row, Col } from "react-grid-system";

import "../styles/cardStyle.css";

function Card({ label, description, images, price }) {
	return (
		<Col sm={4}>
			<div className="product-card">
				<div className="label-container">
					<h4>{label}</h4>
					<h5>{price}$</h5>
				</div>
				<div className="description-container">
					<p>{description}</p>
				</div>
				<img src={images[0]} alt="" />
			</div>
		</Col>
	);
}

export default Card;
