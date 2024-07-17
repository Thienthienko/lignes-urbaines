import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Creations from "./pages/Creations";
import Contact from "./pages/Contact";
import Medias from "./pages/Medias";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/apropos",
        element: <Apropos />,
      },
      {
        path: "/creations",
        element: <Creations />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/medias",
        element: <Medias />,
      },
      {
        path: "/inscription",
        element: <Inscription />,
      },
      {
        path: "/connexion",
        element: <Connexion />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
