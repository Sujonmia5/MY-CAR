import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardTab from '../Components/Dashboard/DashboardTab';
import Footer from '../Components/Shared/Footer/Footer';
import { Navbar } from '../Components/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto grid grid-cols-5'>
                <div className='col-span-1'>
                    <DashboardTab />
                </div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;