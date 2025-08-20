import { useState } from "react";
import useCache from "../../hooks/cache/index";


export default function FavoritesDrawer() {
  const [open, setOpen] = useState(false);
  //getItem delete , it don't use it
  const { setItem, removeItem, cache } = useCache();

  // demo
  const addFavorite = () => {
    const id = Date.now().toString();
    setItem(id, {
      id,
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
      tag: "Wisdom",
    });
  };

  return (
    <>
      <div className="flex gap-2 mb-4 justify-center ">
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          Open Favorites ({Object.keys(cache).length})
        </button>
        <button
          onClick={addFavorite}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          Add Favorite
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40">
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50"
          />

          <div className="absolute right-0 top-0 h-full w-80 bg-[#262626] shadow-xl flex flex-col z-50 transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
              <h2 className="flex items-center text-lg font-semibold text-white-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart h-7 w-7 text-red-500 mr-2"
                  aria-hidden="true"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
                Favorites ({Object.keys(cache).length})
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex-1">
              {Object.keys(cache).length === 0 ? (
                <p className="text-gray-500 italic">No favorites yet.</p>
              ) : (
                Object.values(cache).map((fav: any) => (
                  <div
                    key={fav.id}
                    className="bg-[#ddd] text-gray-800 rounded-lg border border-brown-700 p-4 mb-3 relative shadow-sm"
                  >
                    <button
                      onClick={() => removeItem(fav.id)}
                      className="absolute top-2 right-2 text-gray-700 hover:text-black"
                    >
                      ✕
                    </button>
                    <p className="italic text-sm mb-2">"{fav.quote}"</p>
                    <p className="text-xs text-black-700 mb-2">— {fav.author}</p>
                    <span className="inline-block bg-brown-700 text-black-500 text-xs px-3 py-1 rounded-full">
                      {fav.tag}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
