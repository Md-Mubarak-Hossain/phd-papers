import React from 'react';
import { Link } from 'react-router-dom';
// import logoImg from '../../components/images/logo.png';
const Logo = () => <div className='flex flex-col justify-center items-center'>
    {/* <div className='w-56 h-20'>
       <img src={logoImg} alt="Logo"className='w-48 h-16 block'/>
    </div> */}
    <Link to='/' className="text-sm uppercase"><span>Online Verify Certificate</span></Link>
</div>
export default Logo;