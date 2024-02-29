import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import resultImg from '../../../components/images/allResultLogo.png';
import electionNID from '../../../components/images/nid.png';

const Navbar = () => {
  return (
    <ul className="menu w-56  lg:fixed text-primary decoration-neutral-content">
      <li>
        <Link to='/'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          Home
        </Link >
      </li>
      <li>
        <ExternalLink
          href="http://www.educationboardresults.gov.bd/">
          <img
            className='h-6'
            src={resultImg} alt="All result" />
          GovResultBD
        </ExternalLink>

      </li>
      <li>
        <ExternalLink
          href="https://www.nidw.gov.bd/">
          <img
            className='h-6'
            src={electionNID} alt="NID of BD"/>
          NID of Bangladesh
        </ExternalLink>
      </li>
    </ul>
  );
};

export default Navbar;