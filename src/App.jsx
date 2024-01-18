import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

import "./App.css";

const BasicLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
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
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
