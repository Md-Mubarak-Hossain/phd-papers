import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <li>
            <div className="dropdown dropdown-hover">
                <summary  role="button" className="hover:border-b-2  border-blue-500">About</summary>
                <ul  className="dropdown-content top-9 mx-auto widthMenuHover p-6 shadow-lg grid grid-cols-3 gap-2  bg-base-100">
                    <li className='w-40'><Link to=''>Lorem ipsum dolor sit amet.</Link></li>      
                    <li className='w-40'><Link to=''>Lorem ipsum dolor sit amet.</Link></li>      
                    <li className='w-40'><Link to=''>Lorem ipsum dolor sit amet.</Link></li>      
                    <li className='w-40'><Link to=''>Lorem ipsum dolor sit amet.</Link></li>      
                    <li className='w-40'><Link to=''>Lorem ipsum dolor sit amet.</Link></li>      
                    <li className='w-40'><Link to=''>Lorem ipsum dolor sit amet.</Link></li>             
                </ul>
            </div>
        </li>
    </>
  );
};

export default About;
