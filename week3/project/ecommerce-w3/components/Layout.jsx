import React from 'react';
import css from './Layout.module.css';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav className={css.container}>
        <Link className={css.link} to="/">
          Home
        </Link>
        <Link className={css.link} to="/Categories">
          Categories
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
