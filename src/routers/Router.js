import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../documentation/home/Home';
import SignUp from '../accounts/UserAccount/SignUp/SignUp';
import SignUpEmail from '../accounts/UserAccount/SignUp/SignUpEmail';
import SignIn from '../accounts/UserAccount/SignIn/SignIn';
import Profile from '../accounts/UserAccount/Profile/Profile';
import Contact from '../documentation/Contact/Contact';
import About from '../documentation/About/About';
import Blog from '../documentation/Blog/Blog';
import ErrorLayout from '../utilities/Error/ErrorLayout';
import VerifyDoc from '../documentation/VerifyCreditiential/VerifyDoc';
import UserDashboard from '../dashboard/UserDashboard/UserDashboard';
import WorkFlow from '../documentation/About/WorkFlow';
import AboutSecurity from '../documentation/About/AboutSecurity';
import InstituteDashboard from '../dashboard/InstituteDashboard/InstituteDashboard';
import InstitutePaper from '../dashboard/InstituteDashboard/InstitutePaper';
import InstitutePaperUpdate from '../dashboard/InstituteDashboard/InstitutePaperUpdate';
import InstitutePaperApple from '../dashboard/InstituteDashboard/InstitutePaperApple';
import UserPaper from '../dashboard/UserDashboard/UserPaper';
import AdminDashboard from '../dashboard/AdminDashboard/AdminDashboard';
import AppleBoard from '../dashboard/AdminDashboard/AppleBoard';
import UserInterface from '../dashboard/AdminDashboard/UserInterface';
import UserPaperUpdate from '../dashboard/UserDashboard/UserPaperUpdate';
import UserPaperApple from '../dashboard/UserDashboard/UserPaperApple';
import Main from '../dashboard/DefaultDashboard/Main';
const Router = () => {
    const routes = createBrowserRouter([
        /*........................
            Default Dashboard
        ..........................*/
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    // loader: () => fetch('https://phd-paper-server.vercel.app/phdInfo')
                },

                /*........................
                      Account section
                ..........................*/
                {
                    path: '/signin',
                    element: <SignIn />,
                    // loader: () => fetch('https://phd-paper-server.vercel.app/users')
                },
                {
                    path: '/signup',
                    element: <SignUp />
                },
                {
                    path: '/signupemail',
                    element: <SignUpEmail />
                },
                {
                    path: '/profile',
                    element: <Profile />
                },

                /*........................
                   About Phd Papers
               ..........................*/

                {
                    path: '/verifydoc',
                    element: <VerifyDoc />
                },
                /*........................
                  User Dashboard
               ..........................*/

                {
                    path: '/userdashboard',
                    element: <UserDashboard />,
                    // loader: () => fetch('https://phd-paper-server.vercel.app/phdInfo')
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
                {
                    path: '/aboutsecurity',
                    element: <AboutSecurity />
                },
                {
                    path: '/aboutworkflow',
                    element: <WorkFlow />
                },
                {
                    path: '/about',
                    element: <About />
                },

            ]
        },
        /*........................
                  Admin Dashboard
        ..........................*/

        {
            path: '/adminDashboard',
            element: <AdminDashboard />,
            // loader: () => fetch('https://phd-paper-server.vercel.app/phdInfo'),
            children: [
                {
                    path: '/adminDashboard/apple',
                    element: <AppleBoard/>
                },
                {
                    path: '/adminDashboard/interface',
                    element: <UserInterface/>
                },
                
            ]
        },
        
        /*........................
                  Institute Dashboard
        ..........................*/

        {
            path: '/instituteDashboard',
            element: <InstituteDashboard />,
            // loader: () => fetch('https://phd-paper-server.vercel.app/phdInfo'),
            children: [
                {
                    path: '/instituteDashboard/paper',
                    element: <InstitutePaper />
                },
                {
                    path: '/instituteDashboard/update',
                    element: <InstitutePaperUpdate />
                },
                {
                    path: '/instituteDashboard/apple',
                    element: <InstitutePaperApple />
                },
            ]
        },
        
        /*........................
                  User Dashboard
        ..........................*/
        {
            path: '/userDashboard',
            element: <UserDashboard />,
            // loader: () => fetch('https://phd-paper-server.vercel.app/phdInfo'),
            children: [
                {
                    path: '/userDashboard/paper',
                    element: <UserPaper />
                },
                {
                    path: '/userDashboard/update',
                    element: <UserPaperUpdate />
                },
                {
                    path: '/userDashboard/apple',
                    element: <UserPaperApple />
                },
            ]
        },
       
        /*........................
                  Blog site
        ..........................*/
        {
            path: '/blog',
            element: <Blog />
        },
        
        /*........................
                  Error ayout
        ..........................*/
        {
            path: "/*",
            element: <ErrorLayout />
        }
    ])
    return (
        <RouterProvider router={routes} />
    );
};

export default Router;