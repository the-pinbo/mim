import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import CN from "./components/CN"
import OS from "./components/OS"
import DHT from "./components/DHT"
import Rust from './components/Rust'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cli",
    element: <cliDoc />
  },
  {
    path: "/computer-networking",
    element: <CN />
  },
  {
    path: "/rust",
    element: <Rust />
  },
  {
    path: "/os",
    element: <OS />
  },
  {
    path: "/dht",
    element: <DHT />
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
