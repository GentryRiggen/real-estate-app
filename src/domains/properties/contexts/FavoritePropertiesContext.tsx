import React from 'react';
import * as R from 'ramda';
import { getLocalItem, setLocalItem } from 'lib/utils/localStorage';

export const FAVORITES_STORAGE_KEY = '@@localstorage/favorites';

interface FavoritePropertiesContext {
  favorites: Record<string, true>;
  toggleFavorite: (id: number) => void;
}

export const PropertyFavoritesContext =
  React.createContext<FavoritePropertiesContext>({
    favorites: {},
    toggleFavorite: () => null,
  });

export function PropertyFavoritesProvider({
  children,
}: {
  children: React.ReactNode | JSX.Element;
}) {
  const [favorites, setFavorites] = React.useState<Record<string, true>>(
    getLocalItem(FAVORITES_STORAGE_KEY, {}),
  );

  const toggleFavorite = React.useCallback(
    (id: number) => {
      const stringId = `${id}`;
      setFavorites((favs) => {
        const updated = !!favorites[stringId]
          ? R.dissoc(stringId, favs)
          : R.assoc(stringId, true, favs);
        setLocalItem(FAVORITES_STORAGE_KEY, updated);
        return updated;
      });
    },
    [favorites],
  );

  return (
    <PropertyFavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </PropertyFavoritesContext.Provider>
  );
}
