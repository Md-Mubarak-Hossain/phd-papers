import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../documentation/shared/header/Header';
import Footer from '../../documentation/shared/footer/Footer';
import Navbar from '../../documentation/shared/navbar/Navbar';
import ChatWidget from '../../documentation/chatWidget/ChatWidget';
import '../../documentation/chatWidget/ChatWidget.css';
import Carocel from '../../documentation/carocel/Carocel';
const Main = () => {
    return (
        <>
            {/* <Carocel/> */}
            <div className='w-full flex'>
                <div className=''><Navbar /></div>
                <div className='container mx-0 relative'>
                <div className='mx-0 container'><Header/></div>
                <div className='mx-auto'><Outlet /></div>
                <div className='absolute'><ChatWidget /></div>
                </div>
            </div>
            <div><Footer /></div>
        </>
    );
};

export default Main;