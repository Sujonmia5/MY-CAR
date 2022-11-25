import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Shared/Spinner/Spinner';
import { AuthContext } from '../Context/Context';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Spinner />
    }

    if (user && user.email) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;