import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Categories">Categories</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
