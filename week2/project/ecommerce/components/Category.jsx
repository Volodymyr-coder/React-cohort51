import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import CategoryProducts from './CategoryProducts';

const Category = ({ category, onCategoryClick }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/categories/category/${item}`);
    onCategoryClick();
  };

  return (
    <div>
      {category.map((item) => {
        return (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        );
      })}
      <Outlet />
    </div>
  );
};

export default Category;
