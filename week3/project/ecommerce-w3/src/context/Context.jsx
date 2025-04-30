import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const Context = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorites = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const isFavorite = (id) => favorites.includes(id);
  const value = { favorites, toggleFavorites, isFavorite };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default Context;
