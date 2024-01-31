import { useState } from "react";
import { useQuery } from "react-query";
import { getProducts, getWeather, getGeoCode } from "../services/api";
import { Container, Row, Col } from "react-grid-system";
import Cards from "../components/Cards";

function Home() {
	const [products, setProducts] = useState([]);
	const { isLoading } = useQuery({
		queryKey: "products",
		queryFn: () => getProducts(),
		onSuccess: (data) => {
			console.log("on success data", data);
			setProducts(data.products);
		},
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}


	return (
		<Container>
			<Row>
				<Col sm={12} >
					<h2>Home</h2>
				</Col>
			</Row>
			<Cards data={products}/>
		</Container>
	);
}

export default Home;
