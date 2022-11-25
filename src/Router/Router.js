import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Components/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Components/Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../Components/Dashboard/AllSeller/AllSeller";
import AllUsers from "../Components/Dashboard/AllUsers/AllUsers";
import MyOrders from "../Components/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Components/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../Components/Dashboard/ReportedItems/ReportedItems";
import Cars from "../Components/Home/Cars/Cars";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home />
            },
            {
                path: '/home', element: <Home />
            },
            {
                path: '/cars/:brand', element: <PrivateRoute><Cars /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/cars/data/${params.brand}`)

            },
            {
                path: '/login', element: <Login />
            },
            {
                path: '/registration', element: <Registration />
            },
        ]
    },

    {
        path: '/dashboard', element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard', element: <PrivateRoute><MyOrders /></PrivateRoute>
            },
            {
                path: '/dashboard/myProducts', element: <PrivateRoute><MyProducts /></PrivateRoute>
            },
            {
                path: '/dashboard/addProducts', element: <PrivateRoute><AddProduct /></PrivateRoute>
            },
            {
                path: '/dashboard/allSeller', element: <PrivateRoute><AllSeller /></PrivateRoute>
            },
            {
                path: '/dashboard/allBuyers', element: <PrivateRoute><AllBuyers /></PrivateRoute>
            },
            {
                path: '/dashboard/allUsers', element: <PrivateRoute><AllUsers /></PrivateRoute>
            },
            {
                path: '/dashboard/report', element: <PrivateRoute><ReportedItems /></PrivateRoute>
            }
        ]
    }
])