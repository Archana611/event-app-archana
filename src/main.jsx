import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import "./index.css";
import { Home } from "./screens/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "contacts/:contactId",
        element: <Contact />,
    },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);