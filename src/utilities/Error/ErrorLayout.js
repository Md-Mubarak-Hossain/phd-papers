import React from 'react';
import ErrorUtility from './ErrorUtility';
import Error from './Error';
import ErrorCard from './ErrorCard';

const ErrorLayout = () => {
    return (
        <>
            <ErrorUtility />
            <Error />
            <ErrorCard />
        </>
    );
};

export default ErrorLayout;
