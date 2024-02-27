import React from 'react';
import BannerImg from '../../components/images/verifyBanner4.jpg'
const Carocel = () => {
    return (
        <>
            <div className="carousel w-full bg-red-600">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={BannerImg} className="w-full h-40" />
                </div>
            </div>
        </>
    );
};

export default Carocel; 