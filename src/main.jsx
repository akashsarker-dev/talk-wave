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
import Home from './pages/home/Home.jsx'
import { store } from './store'
import { Provider } from 'react-redux'

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
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/message",
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
