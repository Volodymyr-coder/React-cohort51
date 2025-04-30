import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllData } from '../../helpers/fetchData';
import Loader from '../../helpers/Loader.jsx';
import css from './SingleProduct.module.css';
import { PRODUCT_URL } from '../../src/constants.js';
import HeartRegular from '../assets/heart-regular.svg';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchAllData(`${PRODUCT_URL}/${id}`);
        console.log(data);
        setProduct(data);
      } catch (error) {
        setError('Something went wrong. Please try again...');
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);
  console.log(product);

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
              <img src={product.image} alt={product.title} width={200} />
              <img src={HeartRegular} alt="heart" width={20} height={20} />
            </div>
            <p>Category: {product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
