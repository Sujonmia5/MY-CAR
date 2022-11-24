import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Components/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Components/Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../Components/Dashboard/AllSeller/AllSeller";
import MyOrders from "../Components/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Components/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../Components/Dashboard/ReportedItems/ReportedItems";
import Cars from "../Components/Home/Cars/Cars";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";

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
                path: '/cars/:id', element: <Cars />,
                loader: ({ params }) => fetch(`http://localhost:5000/cars/data/${params.id}`)

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
        path: '/dashboard', element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/myOrders', element: <MyOrders />
            },
            {
                path: '/dashboard/myProducts', element: <MyProducts />
            },
            {
                path: '/dashboard/addProducts', element: <AddProduct />
            },
            {
                path: '/dashboard/allSeller', element: <AllSeller />
            },
            {
                path: '/dashboard/allBuyers', element: <AllBuyers />
            },
            {
                path: '/dashboard/report', element: <ReportedItems />
            }
        ]
    }
])