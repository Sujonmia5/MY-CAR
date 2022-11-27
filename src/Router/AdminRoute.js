import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from '../Components/Shared/Spinner/Spinner';
import { AuthContext } from '../Context/Context';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const { isAdmin, adminLoading } = useAdmin(user?.email)

    if (loading || adminLoading) {
        return <Spinner />
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to='*'  ></Navigate>
};

export default AdminRoute;