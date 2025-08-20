import { useEffect } from "react";
import { useCacheContext } from "../context/cache";

export default function QuoteCount() {
  const { getItem, setItem } = useCacheContext();
  const count = getItem("quote-count") || 0;

  useEffect(() => {
    setItem("quote-count", count + 1);
  }, []);

  return (
    <div className="mt-4 flex justify-left absolute left-5">
      <span className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full shadow-md">
        Quote count: {count}
      </span>
    </div>
  );
}
