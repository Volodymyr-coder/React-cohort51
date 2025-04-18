import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Category = () => {
  return (
    <div>
      <h2>this is category</h2>
      <Outlet />
    </div>
  );
};

export default Category;
