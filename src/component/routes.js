import { createBrowserRouter, Outlet, RouterProvider, useNavigate, } from "react-router-dom";
import Dashboard from "../Dashboard";
import Signup from "../Screen/Signup";
import AddProduct from "../config/addProduct";
import LoginUser from "../Screen/Login";
import NotFound from "../Screen/not found";
import Detail from "../Screen/detail";
import Navbar from "./navbar";
import Footer from "./Footer";
import { auth, onAuthStateChanged } from "../config/firebase";
import { useEffect, useState } from "react";
import FetchProduct from "../config/fetchProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [{
            path: "/",
            element: <div><Navbar /><Dashboard /><Footer /></div>,
        },
        {
            path: "/signup",
            element: <div><Navbar /><Signup /><Footer /></div>,
        },
        {
            path: "/addproduct",
            element: <div><Navbar /><AddProduct /><Footer /></div>,
        },
        {
            path: "/fetch",
            element: <FetchProduct />,
        },
        {
            path: "/signin",
            element: <div><Navbar /><LoginUser /><Footer /></div>,
        },
        {
            path: "/notfound",
            element: <div><Navbar /><NotFound /><Footer /></div>,
        },
        {
            path: "/detail/:adId",
            element: <div><Navbar />{<Detail />}<Footer /></div>,
        }]
    },
]);

function Main() {
    const [user, setUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
    }, [])
    useEffect(() => {
        const { pathname } = window.location
        if (user) {
            console.log('user logged in', user)
        }
        else {
            console.log('please logged in !')
            if (pathname === '/addproduct') {
                navigate('/signin')
            }
        }
    }, [window.location.pathname, user])
    return <div>
        <Outlet />
    </div>

}

function Routers() {
    return <RouterProvider router={router} />
}
export default Routers;