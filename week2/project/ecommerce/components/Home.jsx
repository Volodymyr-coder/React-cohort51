import React, { useState, useEffect } from 'react';
import css from './Home.module.css';
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAllData();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Welcome in our shop!</h1>
      <ul className={css.gridContainer}>
        {products.map((item) => {
          return (
            <li className={css.item} key={item.id}>
              <img className={css.img} src={item.image} />
              <p className={css.title}>{item.category}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
