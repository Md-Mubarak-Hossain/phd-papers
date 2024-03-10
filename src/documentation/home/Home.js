import React from 'react';
import { Link } from 'react-router-dom';
import Features from './Features';

const Home = () => {
  return (
    <div div className="mx-auto bg-base-100 text-justify p-4 flex flex-col justify-center items-center" >
      <h1 className="text-4xl text-red-800"> Confusion!<span className="loading loading-dots loading-lg bg-secondary"></span></h1>
      <h1 className="text-4xl text-secondary pb-4">Philosophy of Doctorate (PhD) certificate...!!!</h1>
      <button className="btn btn-primary btn-outline rounded-full">Get start for verify now</button>
      <div className='p-6 m-5 rounded-badge'>
        <span className='font-semibold text-primary italic'>Welcome to the official website of "PhD Verify certificate",</span> This website contains information about <Link to='/' className='link italic'>Phd Certificate</Link>  and its organizational structure, wings, functionality, and resposibilities. This website also contains information about Education Sector Development Program of Bangladesh.

      </div>
      <div className='p-6 m-5 rounded-badge'>
        <p className='font-semibold text-primary italic'>How many university work???</p>
        There are hundred plus of Universities and Colleges degree are responsible for conducting the Philosophy of doctorates degree  such as PhD Certificate and Undergraduate Certificate level . The website is also responsible for the recognisation of the private sector educational institute.
        <span className='link'>&nbsp;see more...</span>
      </div>
      <Features/>
    </div >
  );
};

export default Home;