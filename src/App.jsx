import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Page1 from "./pages/Home";
import Page2 from "./pages/Page2";
import NextWeek from "./pages/NextWeek";

import "./App.css";

const BasicLayout = () => {
	return (
		<Container>
			<Header />
			<Outlet />
			<Footer />
		</Container>
	);
};

function App() {
	const router = createBrowserRouter([
		{
			element: <BasicLayout />,
			children: [
				{
					path: "/",
					element: <Page1 />,
				},
				{
					path: "/page2",
					element: <Page2 />,
				},
				{
					path: "/next-week",
					element: <NextWeek />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
