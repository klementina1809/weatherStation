import { Container, Row } from "react-grid-system";
import Weather from "./pages/Weather";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/index.css";

function App() {
	return (
		<Container className="wrapper">
			<Header />
			<Weather />
			<Footer />
		</Container>
	);
}

export default App;
