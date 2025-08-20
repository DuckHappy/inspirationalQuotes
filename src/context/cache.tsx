import React, { createContext, useContext } from "react";
import useCache from "../hooks/cache";

type CacheContextType = ReturnType<typeof useCache>;

const CacheContext = createContext<CacheContextType | undefined>(undefined);

export const CacheProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const cache = useCache();
  return (
    <CacheContext.Provider value={cache}>{children}</CacheContext.Provider>
  );
};

export const useCacheContext = () => {
  const context = useContext(CacheContext);
  if (!context) {
    throw new Error("useCacheContext deberia se usado dentro de CacheProvider");
  }
  return context;
};
