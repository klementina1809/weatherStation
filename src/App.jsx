import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Container } from "react-grid-system";
import { QueryClient, QueryClientProvider } from "react-query";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import Weather from "./pages/Weather";

import "./App.css";

const queryClient = new QueryClient();

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
					element: <Home />,
				},
				{
					path: "/page2",
					element: <Page2 />,
				},
				{
					path: "/weather",
					element: <Weather />,
				},
			],
		},
	]);
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
