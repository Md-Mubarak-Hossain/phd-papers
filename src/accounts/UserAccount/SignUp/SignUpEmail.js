import React from 'react';
import { Link } from 'react-router-dom';

const SignUpEmail = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="rounded-none w-full">
          <figure className="w-full">
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="sign up image" className="rounded-none h-12 w-full" />
          </figure>
          <form className="card-body">
            <h1 className='p-2 bg-primary rounded text-white text-xl text-center font-medium'>Sign Up here...</h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input type="text" placeholder="first name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input type="text" placeholder="last name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input type="text" placeholder="user name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Photo</span>
                </label>
                <input type="file" placeholder="user photo" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact No</span>
                </label>
                <input type="number" placeholder="contact" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Retype-Password</span>
                </label>
                <input type="password" placeholder="retype-password" className="input input-bordered" required />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary btn-outline">Sign Up now</button>
            </div>
            <small>Already have an account?
              <Link to='/signin' className='text-blue-500 underline'>Sign in here &#62;</Link>
            </small>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpEmail;