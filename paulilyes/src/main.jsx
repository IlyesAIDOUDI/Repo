import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Protect from "./Protec";
import Piece from "./Piece";
import Acces from "./Acces";
import Navbar from "./Navbar";
import Contact from "./Contact";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App></App>,
    path: "/",
    element: <App></App>,
  }, {
    path: "/home",
    element: <Navbar />,
  }, {
    path: "/protec",
    element: <Protect />,
  },
  {
    path: "/piece",
    element: <Piece />,
  },
  {
    path: "/acces",
    element: <Navbar />,
    element: <Acces />,

  }, {
    path: "/contact",
    element: <Contact />,

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
