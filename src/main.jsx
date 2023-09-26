import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './FirebaseConfig.jsx'
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registration from './pages/registration/Registration.jsx'
import Login from './pages/Login/Login.jsx'
import Resetpassword from './pages/resetPassword/Resetpassword.jsx'


const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration></Registration>
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/resetpassword",
    element: <Resetpassword></Resetpassword>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
