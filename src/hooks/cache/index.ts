import { useState } from "react";

type Cache = Record<string, any>;

function useCache() {
  const [cache, setCache] = useState<Cache>({});

  const setItem = (key: string, value: any) => {
    setCache((prev) => ({ ...prev, [key]: value }));
  };

  const getItem = (key: string) => {
    return cache[key];
  };

  const removeItem = (key: string) => {
    setCache((prev) => {
      const newCache = { ...prev };
      delete newCache[key];
      return newCache;
    });
  };

  const clear = () => setCache({});

  return { setItem, getItem, removeItem, clear, cache };
}

export default useCache;
