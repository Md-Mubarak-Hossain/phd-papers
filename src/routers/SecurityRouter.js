'use client';

import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/Context';
import Loading from '../utilities/Spiner/Loading';

const SecurityRouter = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) { return <Loading /> }
    if (user && user.uid) {
        return children;
    }
    return (
        <Navigate to='/login' state={{ from: location }}
            replace>
        </Navigate>
    );
};

export default SecurityRouter;