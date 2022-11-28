import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from '../Components/Shared/Spinner/Spinner';
import { AuthContext } from '../Context/Context';
import useSeller from '../Hooks/useSeller';

const SellerRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    const { isSeller, sellerLoading } = useSeller(user?.email)

    if (loading || sellerLoading) {
        return <Spinner />
    }

    if (user && isSeller) {
        return children
    }

    return <Navigate to='*' ></Navigate>
};

export default SellerRoute;