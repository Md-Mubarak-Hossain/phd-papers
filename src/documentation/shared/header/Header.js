import React from 'react';
import UserType from '../../../accounts/UserType/UserType';
import Profile from '../../../accounts/UserAccount/Profile/Profile';

const Header = () => {
  const menu = <>
    <li>
    <details className='text-lg'>
      <summary>Verify</summary>
      <ul className="p-2">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </details>
    </li>
    <li>
    <details className='text-lg'>
      <summary>Papers</summary>
      <ul className="p-2">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </details>
    </li>
    <li>
    <details className='text-lg'>
      <summary>Certificate</summary>
      <ul className="p-2">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </details>
    </li>
    <li>
    <details className='text-lg'>
      <summary>About</summary>
      <ul className="p-2">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </details>
    </li>
    <li>
    <details className='text-lg'>
      <summary>Contact</summary>
      <ul className="p-2">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </details>
    </li>
    <li>
    <details className='text-lg'>
      <summary>Blog</summary>
      <ul className="p-2">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </details>
    </li>
  </>
  return (
    <>
      <div className="navbar bg-primary text-lime-100 container font-semibold">
        <div className="navbar-start">

          {/* small Device screen */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box bg-fuchsia-50 w-fit">
              {menu}
            </ul>
          </div>
        </div>

        {/* large Device screen */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menu}
          </ul>
        </div>
        {/* Account Section */}
        <div className='navbar-center flex'>
          <UserType className='px-1'/>
          <Profile/>
        </div>
      </div>
    </>
  );
};

export default Header;