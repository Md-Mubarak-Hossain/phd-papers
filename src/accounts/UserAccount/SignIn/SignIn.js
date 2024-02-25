import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => (
  <>
<div className="card rounded-none">
  <figure className="w-full">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="sign in image" className="rounded-none h-12 w-full" />
  </figure>
  <div className="hero min-h-screen">
      <div className="card w-full lg:px-5">
        <form className="card-body">
          <h1 className="text-xl text-slate-100 font-semibold text-center bg-primary rounded p-1">Sign in your phd papers account</h1>
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
            <button className="btn btn-primary">Sign in</button>
          </div>
          <p><small>Would you not register?<span className='text-sky-800 underline'><Link to='/signup'>SignUp here&#62;&#62;</Link></span></small></p>
        </form>
      </div>

    </div>
</div>
    
  </>
);

export default SignIn;