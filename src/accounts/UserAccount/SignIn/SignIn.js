'use client';

import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../authcontext/Context';

const SignIn = () => {
  useTitle('Sign in')
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.from?.state?.pathname || '/';
  const { logIn, googleLogIn } = useContext(AuthContext);
  const [error, setError] = useState('');
  const handleSub = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 8) {
      return setError('Password minimum 8 characters')
    }
    logIn(email, password)
      .then(res => {
        const user = res.user;
        console.log(user)
        navigate(from, { replace: true })
        alert('successfully sign in')
      })
      .catch(error => {
        return setError('wrong email or password')
        // console.error(error)
      })
  }
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
      <div className="rounded-none">
        <div className="min-h-screen">
          <figure className="w-full">
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="sign in image" className="rounded-none h-12 w-full" />
          </figure>
          <div className="w-full lg:px-5">
            <form onSubmit={handleSub} className="card-body">
              <h1 className="text-xl text-slate-100 font-semibold text-center bg-primary rounded p-1">Sign in your phd papers account</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <p className='text-xs text-error'>{error}</p>
                </label>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign in</button>
              </div>
              <p><small>Would you not register?<span className='text-sky-800 underline'><Link to='/signup'>SignUp here&#62;&#62;</Link></span></small></p>
            </form>
          </div>

        </div>
      </div>

    </>
  );
}
export default SignIn;