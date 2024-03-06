import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../documentation/shared/footer/Footer';
import AdminDashboardHeader from './AdminDashboardHeader';

const AdminDashboard = () => {
    return (
        <div>
            <AdminDashboardHeader/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default AdminDashboard;