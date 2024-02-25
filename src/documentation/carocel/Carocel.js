import React from 'react';

const Carocel = () => {
    return (
        <>
            <div className="carousel w-full h-16">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-0 left-3 right-3 top-0">
                        <a href="#slide4">&#60;</a>
                        <a href="#slide2">&#62;</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-3ad474b7d25d.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-0 left-3 right-3 top-0">
                        <a href="#slide1">&#60;</a>
                        <a href="#slide3">&#62;</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-0 left-3 right-3 top-0">
                        <a href="#slide2">&#60;</a>
                        <a href="#slide4">&#62;</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-0 left-3 right-3 top-0">
                        <a href="#slide3">&#60;</a>
                        <a href="#slide1">&#62;</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carocel;