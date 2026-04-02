import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Page/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Page/Login";
import Register from "../Page/Register";

export const router =createBrowserRouter([
    {
        path: "/",
        Component: Mainlayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },

    {
        path:'/',
        Component: AuthLayout,
            children:[
                {
                    path:'login',
                    Component: Login
                },
                {
                    path:'register',
                    Component: Register
                },
            ]
    }
]);