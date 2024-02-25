import React from 'react';

const Blog = () => {
    return (
        <li>
            <details>
                <summary>Blog</summary>
                <ul className="p-2 text-black w-56 shadow-none rounded-none">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
    );
};

export default Blog;