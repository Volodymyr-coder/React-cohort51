import React, { useState, useEffect } from 'react';
import { fetchAllData } from '../helpers/fetchData';
import { PRODUCT_URL } from '../Constants';
import css from './Home.module.css';
import Loader from '../helpers/Loader';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <div>
      {loading && <Loader />}
      {error && <p className={css.error}>{error}</p>}

      {!loading && !error && (
        <>
          <h1 className={css.title}>Welcome in our shop!</h1>
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

export default Home;
