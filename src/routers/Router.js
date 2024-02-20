import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/Main';
import Home from '../documentation/home/Home';
import SignUp from '../accounts/SignUp';
import SignIn from '../accounts/SignIn';
import Profile from '../accounts/Profile';

const Router = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/signin',
                    element: <SignIn/>
                },
                {
                    path: '/signup',
                    element: <SignUp/>
                },
                {
                    path: '/profile',
                    element: <Profile/>
                },
            ]
        }
    ])
    return (  
        <RouterProvider router={routes}/>
    );
};

export default Router;