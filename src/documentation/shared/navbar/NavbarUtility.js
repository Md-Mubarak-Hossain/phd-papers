import React from 'react';
import { ExternalLink } from 'react-external-link';

const NavbarUtility = ({ m }) => {
    const { href, imge, name, alt,id } = m;
    return (
        <li className='menu my-0 py-0 m-0'>
            <ExternalLink href={href} onClick={id}>
                <img className='h-6' src={imge} alt={alt} />
                {name}
            </ExternalLink>
        </li>
    );
};

export default NavbarUtility;