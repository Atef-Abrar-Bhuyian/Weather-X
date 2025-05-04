import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Default Layout
    children: [
      {
        path: "/",
        element: <Home />, // Home component inside Layout
      },
    ],
  },
]);
