import React from "react";
import UserType from "../../../accounts/UserType/UserType";
import Profile from "../../../accounts/UserAccount/Profile/Profile";
import Contact from "../../Contact/Contact";
import About from "../../About/About";
import VerifyCreditiantial from "../../VerifyCreditiential/VerifyCreditiantial";
import Resorces from "../../resorces/Resorces";
import Certificat from "../../certificate/Certificat";
import Search from "../../../utilities/search/Search";
import { Link } from "react-router-dom";
import Swap from "../../../utilities/swap/Swap";
import Logo from "../../../utilities/logo/Logo";
import Navbar from "../navbar/Navbar";

const Header = () => {
  const menu1 = (
    <>
      <VerifyCreditiantial />
      <Resorces />
      <Certificat />
      <About />
      <Contact />
      <li><Link to='/blog'>Blog</Link></li>
    </>
  );

  return (
    <>
      <div className="navbar  border-b-2 border-purple-900 shadow-lg fixed bg-white text-blue-950">

        <div className="lg:hidden">
          {/* small Device screen */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box bg-fuchsia-50 w-fit"
            >
              <Navbar />
              {menu1}
            </ul>
          </div>
        </div>
        <div className='navbar-start'>
          <Logo />
        </div>
        {/* large Device screen */}

        <div className="navbar-center hidden lg:flex gap-0">
          <ul className="hero-content menu menu-horizontal px-1 gap-0">{menu1}</ul>
        </div>
        {/* Account Section */}
        <div className="flex justify-end navbar-end">
          <Search />
          <Swap />
          <UserType />
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Header;
