import React from 'react';
import { Link } from 'react-router-dom';
import { GiArchiveResearch } from "react-icons/gi";

const Logo = () => <div className=''>
    <Link to='/' className="uppercase flex flex-col justify-center items-center bg-base-100 text-secondary">
        <span className='text-primary text-bold'>
            <GiArchiveResearch/>
        </span>
        <span>Verify Certificate</span>
    </Link>
</div>
export default Logo;