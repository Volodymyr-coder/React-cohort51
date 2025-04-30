import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchAllData } from '../../helpers/fetchData';
import Loader from '../../helpers/Loader';
import HeartRegular from '../assets/heart-regular.svg';

import css from './CategoryProduct.module.css';

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchAllData(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [category]);

  const handleProductClick = (id) => {
    navigate(`/categories/product/${id}`);
  };

  if (loading) return <Loader />;

  return (
    <ul className={css.gridContainer}>
      {products.map((item) => (
        <li
          className={css.item}
          key={item.id}
          onClick={() => {
            handleProductClick(item.id);
          }}
        >
          <img className={css.img} src={item.image} alt={item.title} />
          <img src={HeartRegular} alt="heart" width={20} height={20} />

          <p className={css.title}>{item.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default CategoryProducts;
