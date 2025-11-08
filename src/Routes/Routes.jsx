
import { createBrowserRouter, Router } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        },{
            path: "/Login",
            Component: Login
        },{
            path: "/Register",
            Component: Register
        }
    ]
  },
]);