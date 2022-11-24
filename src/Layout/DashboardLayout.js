import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardTab from '../Components/Dashboard/DashboardTab';
import Footer from '../Components/Shared/Footer/Footer';
import { Navbar } from '../Components/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto grid grid-cols-4'>
                <div className='col-span-1'>
                    <DashboardTab />
                </div>
                <div className='col-span-4 md:col-span-3'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;