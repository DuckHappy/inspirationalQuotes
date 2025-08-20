import { useCacheContext } from "../../context/cache";


export default function Card({ quote, author, onAddFavorite, onNewQuote }) {
  const { setItem } = useCacheContext();

  // Add to favorites handler
  const handleAddFavorite = () => {
    const id = Date.now().toString();
    setItem(id, {
      id,
      quote,
      author,
    });
    if (onAddFavorite) onAddFavorite();
  };

  return (
    <div className="mb-12">
      <div className="w-full max-w-2xl mx-auto shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="p-6 md:p-8">
          <div className="transition-opacity duration-300 opacity-100">
            <div className="flex justify-center gap-3 mb-6">
              <button
                className="flex items-center gap-2 transition-colors text-sm md:text-base px-4 py-2 rounded-lg bg-transparent text-primary hover:bg-secondary hover:text-secondary-foreground"
                onClick={handleAddFavorite}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-4 w-4 transition-all duration-200 text-muted-foreground" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
                <span className="hidden sm:inline">Add to Favorites</span>
                <span className="sm:hidden">Add</span>
              </button>
              <button
                className="flex items-center gap-2 text-sm md:text-base transition-all duration-200 px-4 py-2 rounded-lg bg-primary text-primary-foreground shadow-md"
                onClick={onNewQuote}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw h-4 w-4" aria-hidden="true">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
                <span className="hidden sm:inline">New Quote</span>
                <span className="sm:hidden">New</span>
              </button>
            </div>
            <blockquote className="text-lg md:text-2xl font-medium italic text-center mb-6 leading-relaxed text-foreground px-2">
              {quote}
            </blockquote>
            <p className="text-base md:text-lg text-muted-foreground text-center mb-8">
              {author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

