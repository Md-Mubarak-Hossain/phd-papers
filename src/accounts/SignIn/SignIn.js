import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl shadow-fuchsia-700 bg-base-200">
            <form className="card-body">
            <h1 className="text-xl text-slate-100 font-semibold text-center bg-primary p-1 rounded ">Student:Login your phd papers account</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p><small>Would you not register?<span className='text-sky-800 underline'><Link to='/signup'>SignUp here&#62;&#62;</Link></span></small></p>
            </form>
          </div>
        
      </div>
    </>
  );
};

export default SignIn;