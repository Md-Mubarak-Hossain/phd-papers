import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../documentation/shared/header/Header';
import Footer from '../../documentation/shared/footer/Footer';
import Navbar from '../../documentation/shared/navbar/Navbar';
import ChatWidget from '../../documentation/chatWidget/ChatWidget';
import '../../documentation/chatWidget/ChatWidget.css';
const Main = () => {
    return (
        <div className='relative'>
            <div className='w-full flex'>
                <div>
                    <Navbar />
                </div>
                <div className=''>
                    <Header />
                    <div className='w-full mx-auto'>
                        <Outlet />
                    </div>
                </div>
            </div>
                <Footer />
            <div className='absolute'>
                <ChatWidget />
            </div>
        </div>
    );
};

export default Main;