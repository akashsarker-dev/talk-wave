import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './FirebaseConfig.jsx'
import 'react-toastify/dist/ReactToastify.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Registration from './pages/registration/Registration.jsx'
import Login from './pages/Login/Login.jsx'
import Resetpassword from './pages/resetPassword/Resetpassword.jsx'
import { store } from './store'
import { Provider } from 'react-redux'
import Home from './components/Home/Home';

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
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
