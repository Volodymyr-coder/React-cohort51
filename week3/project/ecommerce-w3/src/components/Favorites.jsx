import { useFavorites } from '../hooks.jsx';
import { fetchAllData } from '../../helpers/fetchData.js';
import { useEffect, useState } from 'react';
import { PRODUCT_URL } from '../constants.js';
import HeartRegular from '../assets/heart-regular.svg';
import HeartSolid from '../assets/heart-solid.svg';

const Favorites = () => {
  const { favorites } = useFavorites();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  console.log(error);
  const { toggleFavorites, isFavorite } = useFavorites();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const requests = favorites.map((id) =>
          fetchAllData(`${PRODUCT_URL}/${id}`)
        );
        const data = await Promise.all(requests);
        setProducts(data);
      } catch (error) {
        setError('Something went wrong. Please try again...');
        console.log(error);
      }
    };
    fetchFavorites();
  }, [favorites]);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            <img src={product.image} alt={product.title} width={50} />
            <img
              src={isFavorite(product.id) ? HeartSolid : HeartRegular}
              alt="heart"
              width={20}
              height={20}
              onClick={() => {
                toggleFavorites(product.id);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
