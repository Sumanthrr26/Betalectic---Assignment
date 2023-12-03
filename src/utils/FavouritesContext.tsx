import React, { createContext, useContext, useState } from "react";

interface FavoritesContextProps {
  favorites: any[];
  addFavorite: (favorite: any) => void;
  removeFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined
);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  const addFavorite = (favorite: any) => {
    setFavorites((prev) => [...prev, favorite]);
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
