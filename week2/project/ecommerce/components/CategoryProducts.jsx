import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchAllData } from '../helpers/fetchData';
import Loader from '../helpers/Loader';

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
    <ul>
      {products.map((item) => (
        <li
          key={item.id}
          onClick={() => {
            handleProductClick(item.id);
          }}
        >
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default CategoryProducts;
