import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Category from './Category.jsx';
import Loader from '../../helpers/Loader.jsx';
import { fetchAllData } from '../../helpers/fetchData.js';
import { useFavorites } from '../hooks.jsx';
import { CATEGORY_URL, PRODUCT_URL } from '../../src/constants.js';
import HeartRegular from '../assets/heart-regular.svg';
import HeartSolid from '../assets/heart-solid.svg';
import css from './Categories.module.css';

const Categories = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showProducts, setShowProducts] = useState(true);
  const { toggleFavorites, isFavorite } = useFavorites();

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

  const handleProductClick = (id) => {
    navigate(`/categories/product/${id}`);
  };

  const handleCategoryClick = (e) => {
    e.stopPropagation();
    setShowProducts(false);
  };

  return (
    <div>
      <Category category={category} onCategoryClick={handleCategoryClick} />
      {loading && <Loader />}
      {error && <p className={css.error}>{error}</p>}

      {!loading && !error && showProducts && (
        <>
          <ul className={css.gridContainer}>
            {products.map((item) => (
              <li
                className={css.item}
                key={item.id}
                onClick={() => {
                  handleProductClick(item.id);
                }}
              >
                <div className={css.imgContainer}>
                  <img className={css.img} src={item.image} alt={item.title} />
                  <img
                    src={isFavorite(item.id) ? HeartSolid : HeartRegular}
                    alt="heart"
                    width={25}
                    height={25}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorites(item.id);
                    }}
                  />
                </div>

                <p className={css.title}>{item.title}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Categories;
