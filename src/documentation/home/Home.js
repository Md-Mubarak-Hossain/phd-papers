import React from 'react';
import Button from '../../utilities/button/Button';
import Loading from '../../utilities/Spiner/Loading';
const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <Loading />
          <Button />
        </div>
      </div>
    </div>

  );
};

export default Home;