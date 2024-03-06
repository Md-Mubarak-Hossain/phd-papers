import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../documentation/shared/footer/Footer';
import InstituteDashboardHeader from './InstituteDashboardHeader';

const InstituteDashboard = () => {
    return (
        <div>
            <InstituteDashboardHeader/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default InstituteDashboard;