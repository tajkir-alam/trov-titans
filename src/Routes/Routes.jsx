import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import Blogs from "../Pages/Blogs/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/AccessAuthorize/Login/Login";
import Registration from "../Pages/AccessAuthorize/Registration/Registration";
import SingleToy from "../Pages/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: '/mytoys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/addtoy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/toy/:id',
                element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
                loader: ({params}) => fetch(`https://trov-titans-server-data.vercel.app/toy/${params.id}`)
            }
        ]
    },
]);

export default router;