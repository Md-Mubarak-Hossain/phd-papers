import React from 'react';
import { Link } from 'react-router-dom';
import resultImg from '../../../components/images/allResultLogo.png';
import electionNID from '../../../components/images/nid.png';
import smuct from '../../../components/images/smuct.png';
import birth from '../../../components/images/birth.png';
import ugc from '../../../components/images/ugc.png';
import passport from '../../../components/images/passport.png';
import thesis from '../../../components/images/thesis.png';
import publicUni from '../../../components/images/publicUni.jpeg';
import privateUni from '../../../components/images/privateUni.jpeg';
import nu from '../../../components/images/nu.png';
import surokkha from '../../../components/images/surokkha.png';
import { IoMdHome } from "react-icons/io";
import NavbarUtility from './NavbarUtility';
const Navbar = () => {
  const navMenu = [
    {
      id: 1,
      name: "Govt BD Result",
      href: "http://www.educationboardresults.gov.bd/",
      imge: resultImg,
      alt: "All Govt result BD"
    },
    {
      id: 2,
      name: "NID Of Bangladesh",
      href: "https://www.nidw.gov.bd/",
      imge: electionNID,
      alt: "Election Of BD"
    },
    {
      id: 3,
      name: "UGC Of Bangladesh",
      href: "http://www.ugc-universities.gov.bd/private-universities",
      imge: ugc,
      alt: "UGC Of Bangladesh"
    },
    {
      id: 4,
      name: "Birth Verify BD",
      href: "https://everify.bdris.gov.bd/UBRNVerification",
      imge: birth,
      alt: "Birth Verify Of BD"
    },
    {
      id: 5,
      name: "Private University Of Bangladesh",
      href: "http://www.ugc-universities.gov.bd/private-universities",
      imge: privateUni,
      alt: "Private University of BD"
    },
    {
      id: 6,
      name: "Shanto Mariam University Of Creative Technology",
      href: "https://smuct.ac.bd/",
      imge: smuct,
      alt: "SMUCT"
    },
    {
      id: 7,
      name: "E-Passport",
      href: "https://www.epassport.gov.bd/authorization/login",
      imge: passport,
      alt: "E-Passport"
    },
    {
      id: 8,
      name: "Thesis Journal",
      href: "https://thesis-journal.net/",
      imge: thesis,
      alt: "Thesis Journal"
    },
    {
      id: 9,
      name: "Public University Of Bangladesh",
      href: "http://www.ugc-universities.gov.bd/public-universities",
      imge: publicUni,
      alt: "Public Unuversity Of BD"
    },
    {
      id: 10,
      name: "National University of BD",
      href: "https://www.nidw.gov.bd/",
      imge: nu,
      alt: "nu Of BD"
    },
    {
      id: 11,
      name: "Surokkha of BD",
      href: "https://www.nidw.gov.bd/",
      imge: surokkha,
      alt: "Vaccsin Of BD"
    }
  ];

  return (
    <div
      className={
        `hover:lg:fixed 
    hover:navbarWidth 
    hover:overflow-y-auto 
    overflow-hidden 
    navbarHeight 
    bg-base-100
    mt-2
    scroll-p-0`
      }>
      <ul className="w-48 text-primary">
        <li className='menu justify-start'>
          <Link to='/' className='h-6'>
            <IoMdHome className='text-xl' />Home
          </Link >
        </li>
        {
          navMenu.map(m => <NavbarUtility
            key={m.id}
            m={m}>
          </NavbarUtility>)
        }
      </ul>
    </div>
  );
};

export default Navbar;