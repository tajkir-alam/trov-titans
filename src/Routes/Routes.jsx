import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import Blogs from "../Pages/Blogs/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/AccessAuthorize/Login/Login";
import Registration from "../Pages/AccessAuthorize/Registration/Registration";

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
                element: <MyToys></MyToys>
            },
            {
                path: '/addtoy',
                element: <AddToy></AddToy>
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
            }
        ]
    },
]);

export default router;