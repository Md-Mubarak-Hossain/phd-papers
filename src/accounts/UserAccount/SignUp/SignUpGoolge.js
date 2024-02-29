
import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../authcontext/Context';
import { useLocation, useNavigate } from 'react-router-dom';
const SignUpGoolge = () => {
    const { googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.from?.state?.pathname || '/';
    const googleSign = () => {
        googleLogIn()
            .then(res => {
                const user = res.user;
                console.log(user)
                navigate(from, { replace: true })
                alert('successfully login')

            })
            .catch(err => {
                console.error(err)
                alert('failed login')
            })
    }
    return (
        <>
            <button onClick={() => googleSign()} className="btn btn-outline btn-primary">
                <FcGoogle />Google</button>
        </>
    );
};

export default SignUpGoolge;