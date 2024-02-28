import React from 'react';
import { Link } from 'react-router-dom';

const VerifyCreditiantial = () => {
    return (
        <li>
            <details>
                <summary>Verify</summary>
                <ul className="p-2  text-black w-56">
                    <li><Link to='/verifydoc'>Verify Doc</Link></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
    );
};

export default VerifyCreditiantial;