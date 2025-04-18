import React, { useEffect, useState } from 'react';
import { CATEGORY_URL } from '../Constants.js';
import Category from './Category.jsx';

const Categories = () => {
  const [category, setCategory] = useState([]);
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProductCategory = async () => {
      try {
        const response = await fetch(CATEGORY_URL);
        const data = await response.json();
        console.log(data);
        setCategory(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProductCategory();
  }, []);

  return (
    <div>
      <Category category={category} />
    </div>
  );
};

export default Categories;
