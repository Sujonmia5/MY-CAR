import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
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
import Error from "../Components/Shared/Error/Error";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

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
                loader: ({ params }) => fetch(`http://localhost:5000/cars/data/${params.brand}`, {
                    headers: {
                        authorization: `${localStorage.getItem('accessToken')}`
                    }
                })

            },
            {
                path: '/login', element: <Login />
            },
            {
                path: '/register', element: <Registration />
            },
        ]
    },
    {
        path: '*', element: <Error></Error>
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
                path: '/dashboard/myProducts', element: <PrivateRoute>
                    <SellerRoute>
                        <MyProducts />
                    </SellerRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/addProducts', element: <PrivateRoute>
                    <SellerRoute>
                        <AddProduct />
                    </SellerRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/allSeller', element: <PrivateRoute>
                    <AdminRoute>
                        <AllSeller />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/allBuyers', element: <PrivateRoute>
                    <AdminRoute>
                        <AllBuyers />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/allUsers', element: <PrivateRoute>
                    <AdminRoute>
                        <AllUsers />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/report', element: <PrivateRoute>
                    <AdminRoute>
                        <ReportedItems />
                    </AdminRoute>
                </PrivateRoute>
            }
        ]
    },
    {
        path: '/blog', element: <Blog></Blog>
    }

])