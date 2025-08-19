import { useState } from "react";

export default function FavoritesDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
      >
        Open Favorites
      </button>

      {open && (
        <div className="fixed inset-0 z-40">
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black bg-opacity-50"
          />

          <div className="absolute right-0 top-0 h-full w-90 bg-[#fafad2] shadow-xl flex flex-col z-50 transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
              <h2 className="flex items-center text-lg font-semibold text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart h-6 w-6 text-red-500 mr-2"
                  aria-hidden="true"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
                Favorites (1/5)
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-4 overflow-y-auto flex-1">
              {/* Example favorite card */}
              <div className="bg-[#d2a679] text-gray-800 rounded-lg border border-brown-700 p-4 relative shadow-sm">
                <button
                  className="absolute top-2 right-2 text-gray-700 hover:text-black"
                >
                  ✕
                </button>
                <p className="italic text-sm mb-2">
                  "The best time to plant a tree was 20 years ago. The second
                  best time is now."
                </p>
                <p className="text-xs text-gray-700 mb-2">
                  — Chinese Proverb
                </p>
                <span className="inline-block bg-brown-700 text-white text-xs px-3 py-1 rounded-full">
                  Wisdom
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
