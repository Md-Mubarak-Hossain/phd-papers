import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/Main';
import Home from '../documentation/home/Home';
import SignUp from '../accounts/UserAccount/SignUp/SignUp';
import SignUpEmail from '../accounts/UserAccount/SignUp/SignUpEmail';
import SignIn from '../accounts/UserAccount/SignIn/SignIn';
import Profile from '../accounts/UserAccount/Profile/Profile';
import Contact from '../documentation/Contact/Contact';
import About from '../documentation/About/About';
import Blog from '../documentation/Blog/Blog';
import ErrorLayout from '../utilities/Error/ErrorLayout';


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

                /*........................
                      Account section
                ..........................*/ 
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
                 /*........................
                      About Phd Papers
                ..........................*/ 
                {
                    path: '/contact',
                    element: <Contact/>
                },
                {
                    path: '/about',
                    element: <About/>
                },
                {
                    path: '/blog',
                    element: <Blog/>
                },

            ]
        },
        {
            path:"/*",
            element:<ErrorLayout/>
        }
    ])
    return (  
        <RouterProvider router={routes}/>
    );
};

export default Router;