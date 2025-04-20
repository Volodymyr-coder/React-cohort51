import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllData } from '../helpers/fetchData';
import { PRODUCT_URL } from '../Constants';
import Loader from '../helpers/Loader';

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
        <>
          <img src={product.image} alt={product.title} width={200} />

          <p>Category: {product.title}</p>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
