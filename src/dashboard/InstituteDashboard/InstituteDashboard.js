import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../documentation/shared/header/Header';
import Footer from '../../documentation/shared/footer/Footer';

const InstituteDashboard = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default InstituteDashboard;