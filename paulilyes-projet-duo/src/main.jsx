import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Protect from "./Protec";
import Piece from "./Piece";
import Acces from "./Acces";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Panier from "./panier";
import { initializeApp } from "firebase/app";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDsjTMp89ItPssmTUfgqNcH6Q_62firMBU",
  authDomain: "paulilyes-55a3e.firebaseapp.com",
  projectId: "paulilyes-55a3e",
  storageBucket: "paulilyes-55a3e.appspot.com",
  messagingSenderId: "628015710639",
  appId: "1:628015710639:web:e10db970f0f3eea7846f5a"
};

const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
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
    element: <Acces />,

  }, {
    path: "/contact",
    element: <Contact />,

  },
  {
    path: "/panier",
    element: <Panier />,


  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
