import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='pageBlog'>
            <div className="headerBlog">
                <h2>Blog Name</h2>
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

            <div className="footerBlog">
                <h2>Footer</h2>
            </div>
        </div>
    );
};

export default Blog;