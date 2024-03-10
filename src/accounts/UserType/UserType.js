import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authcontext/Context";

const UserType = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const from=location.from?.state?.pathname||"/";
  const{user,logOut}=useContext(AuthContext);
  const[adminData,setData]=useState([]);
  useEffect(()=>{
    fetch("https://phd-paper-server.vercel.app/admin")
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
  const signOut=()=>{
    logOut()
    .then(result=>{
      console.log(result);
      navigate(from, { replace: true });
    })
  }
  console.log(adminData);

  return(
    <>
    <ul className="gap-1 flex flex-row text-sm">
        <li>
        <summary role="button" className="btn btn-sm btn-outline hover:border-b-2  border-blue-500" onClick={signOut}>logout</summary>
        </li>
          <>
          <li className="">
            <div className="dropdown dropdown-hover dropdown-end ">
              <summary role="button" className="btn btn-sm btn-outline hover:border-b-2  border-blue-500">signin</summary>
              <ul className="menu dropdown-content top-8 mx-auto widthMenuHover py-6 shadow-lg grid grid-cols-1 gap-2  bg-base-100 left-0">
                <li className='w-40'><Link to='/signin'>User</Link></li>
                <li className='w-40'><Link to='/signup'>Institute</Link></li>
                <li className='w-40'><Link to=''>Admin</Link></li>
              </ul>
            </div>
          </li>
          <li className="">
            <div className="dropdown dropdown-hover dropdown-end">
              <summary role="button" className="btn btn-sm btn-outline hover:border-b-2  border-blue-500">Signup</summary>
              <ul className="menu dropdown-content top-8 mx-auto widthMenuHover py-6 shadow-lg grid grid-cols-1 gap-2  bg-base-100 left-0">
                <li className='w-40'><Link
                  to='/signup'>User</Link></li>
                <li className='w-40'><Link
                  to='/signup'>Institute</Link>
                </li>
                <li className='w-40'><Link to='/adminDashboard/adminSignUp'>Admin</Link>
                </li>
              </ul>
            </div>
          </li>
          </>     
     </ul>
    </>
  )
};
export default UserType;
