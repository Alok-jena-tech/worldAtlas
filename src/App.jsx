import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/country";
import { ErrorPage } from "./pages/ErrorPage";
import CountryDetails from "./components/ui/CountryDetails";
import AppLayout from "./components/Layout/AppLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "/country/:id",
        element: <CountryDetails />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
