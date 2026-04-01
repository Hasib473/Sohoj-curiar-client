import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";

export const router =createBrowserRouter([
    {
        path: "/",
        Component: Mainlayout,
        // children: [
        //     {
        //         index: true,
        //         Component:
        //     }
        // ]
    },
]);