import React from "react";
import { Link } from "react-router-dom";

const UserType = () => (
  <ul className="menu menu-horizontal gap-0">
    <li>
      <details className="capitalize">
        <summary>Login</summary>
        <ul className="rounded-none bg-white text-black">
          <li className="underline">User Type:-</li>
          <li>
            <Link to="/signup">Institution</Link>
          </li>
          <li>
            <Link to="/signin">PhD Student</Link>
          </li>
        </ul>
      </details>
    </li>
  </ul>
);
export default UserType;
