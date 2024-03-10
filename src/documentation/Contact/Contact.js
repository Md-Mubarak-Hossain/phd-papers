import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        // <li>
        //     <details>
        //         <summary>Contact</summary>
        //         <ul className="p-2 w-56 text-black">
        //             <li><a>Contact Email</a></li>
        //             <li><a>Contact Facebook</a></li>
        //             <li><a href="">Contact Messenger</a></li>
        //             <li><a href="">Contact Hotline</a></li>
        //         </ul>
        //     </details>
        // </li>
        <li>
            <div className="dropdown dropdown-hover">
                <summary  role="button" className="hover:border-b-2  border-blue-500">Contact</summary>
                <ul  className="dropdown-content top-9 mx-auto widthMenuHover p-6 shadow-lg grid grid-cols-3 gap-2  bg-base-100">
                    <li><a href="">Hotline</a></li>        
                    <li><a>WhatsApp</a></li>
                    <li><Link to="/contact/email"> Email</Link></li>
                     <li><a>Facebook</a></li>
                    <li><a>LinkedIn</a></li>
                     <li><a>Discord</a></li>
                    <li><a href="">Messenger</a></li>
                </ul>
            </div>
        </li>
    );
};

export default Contact;