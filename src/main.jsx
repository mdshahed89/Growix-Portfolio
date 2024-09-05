import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Aboutp from './pages/Aboutp.jsx'
import Portfoliop from './pages/Portfoliop.jsx'
import Servicep from './pages/Servicep.jsx'
import Blogp from './pages/Blogp.jsx'
import Contactp from './pages/Contactp.jsx'
import Homep from './pages/Homep.jsx'
import MV from './pages/MV.jsx'
import Teamp from './pages/Teamp.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "/",
        element: <Homep  />
      },
      {
        path: "/about",
        element: <Aboutp />
      },
      {
        path: "/portfolio",
        element: <Portfoliop />
      },
      {
        path: "/services",
        element: <Servicep />
      },
      {
        path: "/blogs",
        element: <Blogp />
      },
      {
        path: "/contact",
        element: <Contactp />
      },
      {
        path: "/mission-vision",
        element: <MV />
      },
      {
        path: "/team",
        element: <Teamp />
      },
    ]
    
  },
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

