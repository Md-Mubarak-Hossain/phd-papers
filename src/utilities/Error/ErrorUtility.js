import React from 'react';
import { TiHome } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const ErrorUtility = () => {
    return (
        <>
           <p className='flex items-center gap-2 lg:pt-5 text-slate-700 lg:ps-2'>
                <Link to='/'>
                    <TiHome
                        className='hover:text-primary hover:shadow-xxl hover:cursor-pointer' />
                </Link> &#8725;
                <Link to='/The.page.you.requested.cannot.be.found'>
                    <span className='hover:underline hover:text-primary hover:cursor-pointer'>The page you requested cannot be found!</span>
                </Link>
            </p>  
        </>
    );
};

export default ErrorUtility;