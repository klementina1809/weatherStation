import { Container } from "react-grid-system";
import Weather from "./pages/Weather";
import Header from './components/Header';
import Footer from './components/Footer';

import "./App.css";

function App() {
	return (
		<Container>
			<Header />
			<Weather />
			<Footer />
		</Container>
	);
}

export default App;
