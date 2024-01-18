import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

import "./App.css";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Page1 />,
		},
		{
			path: "/page2",
			element: <Page2 />,
		},
	]);
	return <RouterProvider router={router} />;

	return <></>;
}

export default App;
