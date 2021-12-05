import React from 'react';

export type APICache = Record<string, any>;
export type CacheUpdateFn = (updater: (cache: APICache) => APICache) => void;

interface IAPICacheContext {
  cache: APICache;
  updateCache: CacheUpdateFn;
}

export const APICacheContext = React.createContext<IAPICacheContext>({
  cache: {},
  updateCache: () => ({} as APICache),
});

export function APICacheProvider({
  children,
}: {
  children: React.ReactNode | JSX.Element;
}) {
  const [cache, setCache] = React.useState<APICache>({});

  const updateCache = (updater: any) => {
    setCache(updater);
  };

  return (
    <APICacheContext.Provider value={{ cache, updateCache }}>
      {children}
    </APICacheContext.Provider>
  );
}
