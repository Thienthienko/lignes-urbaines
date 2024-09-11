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
import AdminPage from "./pages/AdminPage";
import JeuneBallet from "./pages/JeuneBallet";
import LesGens from "./pages/LesGens";

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
        path: "/lesgens",
        element: <LesGens />,
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
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/jeuneballet",
        element: <JeuneBallet />,
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
