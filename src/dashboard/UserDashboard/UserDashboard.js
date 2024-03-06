import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../documentation/shared/footer/Footer';
import UserDashboardHeader from './UserDashboardHeader';

const UserDashboard = () => {
    return (
        <div>
            <UserDashboardHeader/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default UserDashboard;