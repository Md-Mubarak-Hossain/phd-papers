import React from 'react';
import { Link } from 'react-router-dom';

const UserType = () => <ul className="menu menu-horizontal px-1">
<li>
    <details className="text-lg capitalize">
        <summary>Login</summary>
        <ul className="p-1 w-40 rounded-none bg-white text-black">
            <li className='underline'>User Type:-</li>
            <li><Link to='/signup'>Institution</Link></li>
            <li><Link to='/signin'>PhD Student</Link></li>
        </ul>
    </details>
</li>
</ul>
export default UserType;