import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Category = ({ category, onCategoryClick }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/category/${item}`);
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
