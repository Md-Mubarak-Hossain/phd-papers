import React from 'react';
import { Link } from 'react-router-dom';

const ErrorCard = () => {
    return (
<div className="card rounded-none lg:pb-2">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-primary font-semibold">Oops!</h2>
    <p className='text-purple-950'>The page you requested cannot be found!</p>
    <div className="card-actions">
      <Link to='/'>
      <button className="btn btn-primary">Continue</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ErrorCard;