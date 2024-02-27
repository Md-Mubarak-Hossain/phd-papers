import React from 'react';

const Features = () => {
    return (
        <>
            <div className="card  bg-base-100 rounded-none">
                <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New Feature!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See more</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;