import React from 'react';

const Contact = () => {
    return (
        <li>
            <details>
                <summary>Contact</summary>
                <ul className="p-2 w-56 text-black">
                    <li><a>Contact Email</a></li>
                    <li><a>Contact Facebook</a></li>
                    <li><a href="">Contact Messenger</a></li>
                    <li><a href="">Contact Hotline</a></li>
                </ul>
            </details>
        </li>
    );
};

export default Contact;