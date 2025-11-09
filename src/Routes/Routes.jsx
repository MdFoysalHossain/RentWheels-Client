
import { createBrowserRouter, Router } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import AuthProvider from "../Contexts/Auth/AuthProvider";
import PrivateRoute from "./PrivateRoute";
import AddCar from "../Components/Pages/AddCar/AddCar";


export const router = createBrowserRouter([
    {
        path: "/",
        element:
            <AuthProvider>
                <Root></Root>
            </AuthProvider>,
            
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            }, {
                path: "/Login",
                Component: Login
            }, {
                path: "/Register",
                Component: Register
            }, {
                path: "/AddCar",
                element: <PrivateRoute><AddCar/></PrivateRoute> 
            }
        ]
    },
]);