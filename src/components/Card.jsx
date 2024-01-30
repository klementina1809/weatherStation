import React from "react";
import { Container, Row, Col } from "react-grid-system";

import "../styles/cardStyle.css";

function Card({ label, description, images, price }) {
	return (
		<Col sm={4}>
			<div className="product-card">
				<div className="img-container">
					<h6 className="price">{price}$</h6>
					<img src={images[0]} alt="" />
				</div>
				<div className="label-container">
					{label.length > 10 ? <h5>{label}</h5> : <h4>{label}</h4>}
				</div>

				<div className="description-container">
					<p>{description}</p>
				</div>
			</div>
		</Col>
	);
}

export default Card;
