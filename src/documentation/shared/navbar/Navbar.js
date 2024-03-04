import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import resultImg from '../../../components/images/allResultLogo.png';
import electionNID from '../../../components/images/nid.png';

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
      name: "Govt BD Result",
      href: "http://www.educationboardresults.gov.bd/",
      imge: resultImg,
      alt: "All Govt result BD"
    },
    {
      id: 4,
      name: "NID Of Bangladesh",
      href: "https://www.nidw.gov.bd/",
      imge: electionNID,
      alt: "Election Of BD"
    },
    {
      id: 5,
      name: "Govt BD Result",
      href: "http://www.educationboardresults.gov.bd/",
      imge: resultImg,
      alt: "All Govt result BD"
    },
    {
      id: 6,
      name: "NID Of Bangladesh",
      href: "https://www.nidw.gov.bd/",
      imge: electionNID,
      alt: "Election Of BD"
    },
    {
      id: 7,
      name: "Govt BD Result",
      href: "http://www.educationboardresults.gov.bd/",
      imge: resultImg,
      alt: "All Govt result BD"
    },
    {
      id: 8,
      name: "NID Of Bangladesh",
      href: "https://www.nidw.gov.bd/",
      imge: electionNID,
      alt: "Election Of BD"
    },
    {
      id: 9,
      name: "Govt BD Result",
      href: "http://www.educationboardresults.gov.bd/",
      imge: resultImg,
      alt: "All Govt result BD"
    },
    {
      id: 10,
      name: "NID Of Bangladesh",
      href: "https://www.nidw.gov.bd/",
      imge: electionNID,
      alt: "Election Of BD"
    },
    {
      id: 11,
      name: "Govt BD Result",
      href: "http://www.educationboardresults.gov.bd/",
      imge: resultImg,
      alt: "All Govt result BD"
    },
    {
      id: 12,
      name: "NID Of Bangladesh",
      href: "https://www.nidw.gov.bd/",
      imge: electionNID,
      alt: "Election Of BD"
    },
    {
      id: 13,
      name: "Govt BD Result",
      href: "http://www.educationboardresults.gov.bd/",
      imge: resultImg,
      alt: "All Govt result BD"
    },
    {
      id: 14,
      name: "NID Of Bangladesh",
      href: "https://www.nidw.gov.bd/",
      imge: electionNID,
      alt: "Election Of BD"
    }
  ];
  return (
    <div className='lg:fixed'>
      <ul className="menu w-56  text-primary decoration-neutral-content bg-base-100">
        <li>
          <Link to='/'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Home
          </Link >
        </li>
        {
          navMenu.map(m => <li className='' key={m.id}>
            <ExternalLink
              href={m.href}>
              <img
                className='h-6'
                src={m.imge} alt={m.alt} />
              {m.name}
            </ExternalLink>
          </li>)
        }
      </ul>
    </div>
  );
};

export default Navbar;