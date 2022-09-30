import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { HomePage } from "./screens/HomePage";
import reportWebVitals from './reportWebVitals';
import { CreateEventPage } from "./screens/CreateEventPage";
import { EventPage } from "./screens/EventPage";
import { ErrorPage } from "./screens/ErrorPage";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <CreateEventPage />,
  },
  {
    path: "/event",
    element: <EventPage />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();