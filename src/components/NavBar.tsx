import { useState } from "react";
import tagsData from "../../mockup/tags.json";
import quoteData from "../../mockup/useQuoteApi.json";
import { useCacheContext } from "../context/cache";
import type { Quote } from "../types/quotes.type";

function NavBar() {
  const { setItem } = useCacheContext();
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const createHandlerTag = (tag: string) => () => {
    setSelectedTag(tag);
    const quotes: Quote[] = quoteData;

    if (tag === "all") setItem("quotes", quotes);
    else
      setItem(
        "quotes",
        quotes.filter((q) => q.tag === tag)
      );
  };

  return (
    <div className="flex items-center justify-between gap-2 w-max m-auto mt-3 ">
      {tagsData.map((tag, index) => (
        <button
          className={`transition-colors rounded-lg pl-2 pr-2 pt-1 pb-1 ${
            selectedTag === tag
              ? "bg-indigo-600 text-white"
              : "hover:bg-indigo-600"
          }`}
          onClick={createHandlerTag(tag)}
          key={`${tag}-${index}`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
