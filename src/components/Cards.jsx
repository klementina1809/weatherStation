import React from "react";
import { Container, Row, Col } from "react-grid-system";

import Card from "./Card";

function Cards({ data }) {
	return (
		<Row>
			{data.map((product) => (
				<Card
					key={product.id}
					label={product.title}
					description={product.description}
					images={product.images}
					price={product.price}
				/>
			))}
		</Row>
	);
}

export default Cards;
