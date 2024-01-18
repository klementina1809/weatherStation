import { useState } from "react";
import { useQuery } from "react-query";
import { getProducts } from "../services/api";

function Home() {
	const [products, setProducts] = useState([]);
	const { isLoading } = useQuery({
		queryKey: "persons",
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
		<div>
			<h1>Home</h1>
			<ul>
				{products.map((product) => (
					<li key={product.id}>{product.title}</li>
				))}
			</ul>
		</div>
	);
}

export default Home;
