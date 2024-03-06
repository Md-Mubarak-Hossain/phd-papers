import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../documentation/chatWidget/ChatWidget.css';
import ChatWidget from '../../documentation/chatWidget/ChatWidget';
import Footer from '../../documentation/shared/footer/Footer';
import DefaultDashboardHeader from './DefaultDashboardHeader';

const Main = () => {
    return (
        <div className=''>
            <div className='relative w-full'>
                <div className=''>
                    <div className='w-full'>
                        <div className='container h-20'><DefaultDashboardHeader/></div>
                        <div className='flex w-full min-h-screen'>
                            <div className='outletWidth lg:mx-auto min-h-screen lg:px-1'>
                                <Outlet />
                            </div>
                        </div>
                        <div className='absolute'><ChatWidget /></div>
                    </div>
                </div>
            </div>
            <div className='w-full'><Footer/></div>
        </div>
    );
};

export default Main;