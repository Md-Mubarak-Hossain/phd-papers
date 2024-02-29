import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import VerifyImgEmail from '../../../components/images/verifyBanner2.jpg';
import useTitle from '../../../hooks/title/useTitle';
import { AuthContext } from '../../../authcontext/Context';
const SignUpEmail = () => {
  useTitle('sign up')
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.from?.state?.pathname || '/';
  const { loading, createUser, googleLogIn } = useContext(AuthContext)
  const [error, setError] = useState('')
  const handleSub = e => {
    e.preventDefault();
    const form = e.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const userName = form.userName.value;
    const userPhoto = form.userPhoto.value;
    const contact = form.contact.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    if (!password.includes(confirm)) {
      return setError('Password is not matched')
    }
    if (password.length < 8) {
      return setError('Password minimum 8 characters')
    }
    createUser(email, password)
      .then(res => {
        const user = res.user;
        console.log(user)

        const userInfo = {
          email, password, fname, lname, userName, contact, userPhoto
        }
        fetch('https://food-server-three.vercel.app/recipes', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(userInfo)
        })
          .then(res => res.json())
          .then(result => {
            if (result.acknowledged) {
              form.reset();
              console.log(result)
              navigate(from, { replace: true })
              alert('successfully account created')
            }
          })
          .catch(error => {
            console.error(error)
            alert('Try again!!!')
          })
      })
  }

  return (
    <>
      <div className="min-h-screen">
        <div className="rounded-none w-full">
          <figure className="w-full">
            <img src={VerifyImgEmail} className="rounded-none h-12 w-full" />
          </figure>
          <form onSubmit={handleSub} className="card-body">
            <h1 className='p-2 bg-primary rounded text-white text-xl text-center font-medium'>Sign Up here...</h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input type="text" name='fname' placeholder="first name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input type="text" name='lname' placeholder="last name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input type="text" name='userName' placeholder="user name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Photo</span>
                </label>
                <input type="file" name='userPhoto' placeholder="user photo" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact No</span>
                </label>
                <input type="number" name='contact' placeholder="contact" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Retype-Password</span>
                </label>
                <input type="password" name='confirm' placeholder="retype-password" className="input input-bordered" required />
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