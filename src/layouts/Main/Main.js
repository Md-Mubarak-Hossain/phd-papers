import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../documentation/shared/header/Header';
import Footer from '../../documentation/shared/footer/Footer';

const Main = () => {
    return (
        <>
          <Header/>
           <Outlet/>
           <Footer/>
        </>
    );
};

export default Main;