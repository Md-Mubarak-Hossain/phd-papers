import React from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import VerifySignUp from '../../../components/images/verifyBanner1.jpg'
import SignUpPhone from '../../UserAccount/SignUp/SignUpPhone';
import SignUpGoolge from '../../UserAccount/SignUp/SignUpGoolge';
const AdminSignUp = () => {
    return (
        <><div className=" rounded-none">
            <figure className='h-20 w-full'>
                <img src={VerifySignUp} alt="sign up!" className='h-20 w-full' />
                </figure>
            <div className="card-body">
                <h2 className="card-title">Sign Up with...</h2>
                <ul className="menu lg:px-7">
                    <Link to='/adminDashboard/adminSignUpEmail'>
                        <li className='lg:p-1'><button className="btn btn-outline">
                            <MdEmail />User Email</button>
                        </li>
                    </Link>
                    <li className='lg:p-1'><SignUpPhone /></li>
                    <li className='lg:p-1'><SignUpGoolge /></li>                  
                    <li>
                        <small>Already have an account?
                            <Link to='/admin/adminSignIn' className='text-blue-500 underline'>Sign in here &#62;</Link>
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

export default AdminSignUp;