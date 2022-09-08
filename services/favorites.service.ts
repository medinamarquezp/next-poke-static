const STORAGE_KEYS = {
  FAVORITES: "favorites",
};

const getParsedFavorites = () => {
  const favoritesStore = localStorage.getItem(STORAGE_KEYS.FAVORITES);
  const favorites: string[] = favoritesStore ? JSON.parse(favoritesStore) : [];
  return favorites;
};

export const isInFavorites = (identifier: string) => {
  if (typeof window === "undefined") return false;
  const favorites = getParsedFavorites();
  return favorites.includes(identifier);
};

export const toggleFavorite = (identifier: string) => {
  let favorites = getParsedFavorites();
  if (favorites.includes(identifier)) {
    favorites = favorites.filter((favorite) => favorite !== identifier);
  } else {
    favorites.push(identifier);
  }
  localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
};
