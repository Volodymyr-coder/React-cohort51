import React, { useEffect, useState } from 'react';
import Category from './Category.jsx';
import Loader from '../helpers/Loader.jsx';
import { fetchAllData } from '../helpers/fetchData.js';
import { CATEGORY_URL, PRODUCT_URL } from '../Constants.js';
import css from './Categories.module.css';

const Categories = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showProducts, setShowProducts] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchAllData(CATEGORY_URL);

        setCategory(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getCategories();
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchAllData(PRODUCT_URL);
        setProducts(data);
      } catch (error) {
        setError('Something went wrong. Please try again...');
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleCategoryClick = () => {
    setShowProducts(false);
  };

  return (
    <div>
      <h1 className={css.title}>Welcome in category</h1>
      <Category category={category} onCategoryClick={handleCategoryClick} />
      {loading && <Loader />}
      {error && <p className={css.error}>{error}</p>}

      {!loading && !error && showProducts && (
        <>
          <ul className={css.gridContainer}>
            {products.map((item) => (
              <li className={css.item} key={item.id}>
                <img className={css.img} src={item.image} alt={item.title} />
                <p className={css.title}>{item.category}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Categories;
