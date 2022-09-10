const STORAGE_KEYS = {
  FAVORITES: "favorites",
};

interface Favorite {
  [id: string]: number;
}

const getParsedFavorites = () => {
  const favoritesStore = localStorage.getItem(STORAGE_KEYS.FAVORITES);
  const favorites: Favorite = favoritesStore ? JSON.parse(favoritesStore) : {};
  return favorites;
};

export const isInFavorites = (identifier: string) => {
  if (typeof window === "undefined") return false;
  const favorites = getParsedFavorites();
  return identifier in favorites;
};

export const toggleFavorite = (favorite: Favorite) => {
  let favorites = getParsedFavorites();
  const [key, value] = Object.entries(favorite)[0];
  if (key in favorites) {
    delete favorites[key];
  } else {
    favorites[key] = value;
  }
  localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
};

export const getFavorites = () => {
  const favorites = getParsedFavorites();
  return Object.entries(favorites);
};
