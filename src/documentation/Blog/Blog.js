import React from 'react';
import Accordin from './Accordin';

const Blog = () => {
    return (
        <div>
            <div className='ms-auto'><button className="btn">
                Inbox
                <div className="badge badge-secondary">+99</div>
            </button></div>
            <Accordin />
        </div>
    );
};

export default Blog;