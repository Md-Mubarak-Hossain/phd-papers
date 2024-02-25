import React from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import SignUpPhone from './SignUpPhone';
import SignUpGoolge from './SignUpGoolge';
import SignUpGitHub from './SignUpGitHub';
import SignUpMeta from './SignUpMeta';
const SignUp = () => {
    return (
        <><div className="card glass lg:px-7">
            <figure className='h-20'><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">Sign Up with...</h2>
                <ul className="menu">
                    <Link to='/signupemail'>
                        <li className='lg:p-1'><button className="btn btn-outline">
                            <MdEmail />User Email</button>
                        </li>
                    </Link>
                    <li className='lg:p-1'><SignUpPhone /></li>
                    <li className='lg:p-1'><SignUpGoolge /></li>
                    <li className='lg:p-1'><SignUpGitHub /></li>
                    <li className='lg:p-1'><SignUpMeta /></li>
                    <li>
                        <small>Already have an account?
                            <Link to='/signin' className='text-blue-500 underline'>Sign in here &#62;</Link>
                        </small>
                    </li>
                </ul>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">
                        <Link to='/'>Return Home!Click here&#62;</Link>
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignUp;