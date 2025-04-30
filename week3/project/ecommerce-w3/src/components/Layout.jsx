import React from 'react';
import css from './Layout.module.css';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isFavoritesPage = location.pathname.includes('favorites');
  return (
    <div>
      <div className={css.navContainer}>
        <h1 className={css.title}>
          {isFavoritesPage ? 'Favorites' : 'Products'}
        </h1>
        <nav className={css.navContainer}>
          <Link className={css.link} to="/">
            Categories
          </Link>
          <Link className={css.link} to="/favorites">
            Favorites
          </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
