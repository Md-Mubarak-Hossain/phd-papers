import React from "react";
import { Link } from "react-router-dom";

const UserType = () => (
  <ul className="menu menu-horizontal gap-0">
    <li>
            <div className="dropdown dropdown-hover dropdown-end">
                <summary  role="button" className="hover:border-b-2  border-blue-500">Login</summary>
                <ul  className="dropdown-content top-9 mx-auto widthMenuHover py-6 shadow-lg grid grid-cols-1 gap-2  bg-base-100 left-0">
                    <li className='w-40'><Link to='/signin'>PhD Syudent</Link></li>      
                    <li className='w-40'><Link to='/signup'>Institute</Link></li>           
                    <li className='w-40'><Link to=''>Lorem ipsum dolor sit amet.</Link></li>      
                    <li className='w-40'><Link to=''>Lorem ipsum dolor sit amet.</Link></li>             
                </ul>
            </div>
        </li>
  </ul>
);
export default UserType;
