import React from 'react';

const About = () => {
    return (
        <>
            <li>
                <details>
                    <summary>About</summary>
                    <ul className="p-2 w-56 text-black">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li>
        </>
    );
};

export default About;