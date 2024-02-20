import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../documentation/shared/header/Header';
import Footer from '../../documentation/shared/footer/Footer';
import Navbar from '../../documentation/shared/navbar/Navbar';

const Main = () => {
    return (
        <div className='w-full'>
          <Header/>
          <div className='flex'>
          <div><Navbar/></div>
           <div className='w-full mx-auto'><Outlet/></div>
          </div>
           <Footer/>
        </div>
    );
};

export default Main;