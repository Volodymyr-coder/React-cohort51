import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Category = ({ category }) => {
  return (
    <div>
      {category.map((item) => {
        return <button>{item}</button>;
      })}
      <Outlet />
    </div>
  );
};

export default Category;
