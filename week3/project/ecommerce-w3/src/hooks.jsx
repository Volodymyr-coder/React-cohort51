import { useContext } from 'react';
import { FavoriteContext } from './context/Context.jsx';

export const useFavorites = () => useContext(FavoriteContext);
