import React from 'react';
import './Blog.css'
import Footer from '../shared/footer/Footer';
import BlogHeader from './BlogHeader';

const Blog = () => {
    return (
        <>
            <BlogHeader/>
            <div className='h-20'>
            </div>
            <div className='pageBlog top-8'>
                <div className="headerBlog">
                    <h2>Welcome!!! Verify Blog site</h2>
                </div>

                <div className="rowBlog">
                    <div className="leftColumn">
                        <div className="cardBlog">
                            <h2>TITLE HEADING</h2>
                            <h5>Title description, Dec 7, 2017</h5>
                            <div className="fakeImg h-52">Image</div>
                            <p>Some text..</p>
                        </div>
                        <div className="cardBlog">
                            <h2>TITLE HEADING</h2>
                            <h5>Title description, Sep 2, 2017</h5>
                            <div className="fakeImg h-52">Image</div>
                            <p>Some text..</p>
                        </div>
                    </div>
                    <div className="rightColumn">
                        <div className="cardBlog">
                            <h2>About Me</h2>
                            <div className="fakeImg h-28">Image</div>
                            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                        </div>
                        <div className="cardBlog">
                            <h3>Popular Post</h3>
                            <div className="fakeImg">Image</div><br />
                            <div className="fakeImg">Image</div><br />
                            <div className="fakeImg">Image</div>
                        </div>
                        <div className="cardBlog">
                            <h3>Follow Me</h3>
                            <p>Some text..</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className="join mb-3">
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog;