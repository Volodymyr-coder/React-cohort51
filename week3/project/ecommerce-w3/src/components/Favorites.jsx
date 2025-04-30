import { useFavorites } from '../hooks.jsx';
import { fetchAllData } from '../../helpers/fetchData.js';
import { useEffect, useState } from 'react';
import { PRODUCT_URL } from '../constants.js';
import HeartRegular from '../assets/heart-regular.svg';
import HeartSolid from '../assets/heart-solid.svg';
import css from './Favorites.module.css';
import { useNavigate } from 'react-router';

const Favorites = () => {
  const { favorites } = useFavorites();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  console.log(error);
  const { toggleFavorites, isFavorite } = useFavorites();
  const navigate = useNavigate();
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

  const handleProductClick = (id) => {
    navigate(`/categories/product/${id}`);
  };

  return (
    <div className={css.container}>
      <ul className={css.gridContainer}>
        {products.map((product) => (
          <li
            className={css.item}
            key={product.id}
            onClick={() => {
              handleProductClick(product.id);
            }}
          >
            <div className={css.imgContainer}>
              <img
                className={css.img}
                src={product.image}
                alt={product.title}
                width={50}
              />
              <div className={css.heartIcon}>
                <img
                  src={isFavorite(product.id) ? HeartSolid : HeartRegular}
                  alt="heart"
                  width={20}
                  height={20}
                  onClick={() => {
                    toggleFavorites(product.id);
                  }}
                />
              </div>
            </div>
            <p className={css.title}>{product.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
