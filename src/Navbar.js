import React from 'react';

const Navbar = ({ getUsers }) => {
  return (
    <nav className="navbar">
      <div className="brand">API Users</div>
      <button className="get-users" onClick={getUsers}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
