"use client";

import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <li>
        <details>
          <summary>About</summary>
          <ul className="lg:w-24 text-black rounded-none shadow-none text-nowrap">
            <li>
              <Link to="/aboutsecurity">
                <small>Security</small>
              </Link>
            </li>
            <li>
              <Link to="/aboutworkflow">
                <small>WorkFlow</small>
              </Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
};

export default About;
