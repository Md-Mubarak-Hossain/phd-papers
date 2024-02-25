import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/Main';
import Home from '../documentation/home/Home';
import SignUp from '../accounts/UserAccount/SignUp/SignUp';
import SignUpEmail from '../accounts/UserAccount/SignUp/SignUpEmail';
import SignIn from '../accounts/UserAccount/SignIn/SignIn';
import Profile from '../accounts/UserAccount/Profile/Profile';


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
                    path: '/signupemail',
                    element: <SignUpEmail/>
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