import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CN from "./components/CN"
import OS from "./components/OS"
import DHT from "./components/DHT"
import Rust from './components/Rust'
import cliDoc from './components/CLI-doc'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cli",
    element: <cliDoc/>
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
    <App />
  </React.StrictMode>,
)
