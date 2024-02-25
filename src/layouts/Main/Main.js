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
                <div className=''><Navbar /></div>
                <div className='container mx-0'>
                    <div className='mx-0'><Header /></div>
                    <div className='mx-auto'><Outlet /></div>
                </div>
            </div>
            <div><Footer /></div>
            <div className='absolute'><ChatWidget /></div>
        </div>
    );
};

export default Main;