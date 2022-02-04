import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteCharacter) => {},
  removeFavorite: (CharacterId) => {},
  itemIsFavorite: (CharacterId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteCharacter) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteCharacter);
    });
  }

  function removeFavoriteHandler(CharacterId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(Character => Character.id !== CharacterId);
    });
  }

  function itemIsFavoriteHandler(CharacterId) {
    return userFavorites.some(Character => Character.id === CharacterId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
