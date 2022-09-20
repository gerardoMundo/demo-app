import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home';
import ConfigUsuario from './pages/ConfigUsuario';
import ControlVentas from './pages/ControlVentas';
import ControlNotificaciones from './pages/ControlNotificaciones';
import { GlobalStyles } from './styles/styles';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />
  }, 
  {
    path: "/configuracion-usuario", 
    element: <ConfigUsuario />
  },
  {
    path: "/control-ventas", 
    element: <ControlVentas />
  },
  {
    path: "/control-notificaciones", 
    element: <ControlNotificaciones />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />
  </React.StrictMode>
)
