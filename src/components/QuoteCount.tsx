import { useEffect } from "react";
import { useCacheContext } from "../context/cache";

function QuoteCount() {
  const { getItem, setItem } = useCacheContext();
  const count = getItem("quote-count") || 0;

  useEffect(() => {
    setItem("quote-count", count + 1);
  }, []);

  return (
    <div>
      <span>Quote count: {count}</span>
    </div>
  );
}

export default QuoteCount;
