import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllData } from '../../helpers/fetchData';
import Loader from '../../helpers/Loader.jsx';
import css from './SingleProduct.module.css';
import { PRODUCT_URL } from '../../src/constants.js';
import HeartRegular from '../assets/heart-regular.svg';
import HeartSolid from '../assets/heart-solid.svg';
import { useFavorites } from '../hooks.jsx';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const numberId = Number(id);
  const { toggleFavorites, isFavorite } = useFavorites();
  const favorite = isFavorite(numberId);
  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchAllData(`${PRODUCT_URL}/${numberId}`);
        setProduct(data);
      } catch (error) {
        setError('Something went wrong. Please try again...');
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [numberId]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product found.</p>;
  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className={css.container}>
          <div>
            <h1>{product.title}</h1>
          </div>
          <div className={css.wrapper}>
            <div className={css.img}>
              <img
                className={css.img}
                src={product.image}
                alt={product.title}
              />
              <img
                src={favorite ? HeartSolid : HeartRegular}
                alt="heart"
                width={20}
                height={20}
                onClick={() => {
                  toggleFavorites(numberId);
                }}
              />
            </div>
            <p>Category: {product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
