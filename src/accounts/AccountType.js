import React from 'react';
import { Link } from 'react-router-dom';

const AccountType = () => <ul className="menu menu-horizontal px-1">
    <li>
        <details className="text-slate-950  text-lg capitalize">
            <summary>user Type</summary>
            <ul className="p-2">
                <li><Link to='/'>Institution</Link></li>
                <li><Link to='/signin'>PhD Student</Link></li>
            </ul>
        </details>
    </li>
</ul>

export default AccountType;