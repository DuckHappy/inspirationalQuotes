import { CacheProvider, useCacheContext } from "./context/cache.tsx";
import QuoteCount from "./components/QuoteCount.tsx";
import Header from "./components/Header.tsx";
import FavoritesDrawer from "./components/favorites/favorites.tsx";
import Card from "./components/Card/Card.tsx";
import quotesData from "../mockup/useQuoteApi.json";
import { useState, useEffect } from "react";

function App() {
  return (
    <CacheProvider>
      <AppContent />
    </CacheProvider>
  );
}

function AppContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { getItem, setItem } = useCacheContext();

  useEffect(() => {
    if (!getItem("quotes")) {
      setItem("quotes", quotesData);
    }
  }, []);

  const quotesArray = getItem("quotes") || [];
  const currentQuote = quotesArray[currentIndex];

  const handleAddFavorite = () => {
    if (!currentQuote) return;
    const id = Date.now().toString();
    const newFavorite = {
      id,
      quote: currentQuote.quote,
      author: currentQuote.author,
      tag: currentQuote.tag,
    };
    const currentFavorites = getItem("favorites") || [];
    const exists = currentFavorites.some(
      (fav: any) =>
        fav.quote === currentQuote.quote && fav.author === currentQuote.author
    );
    if (!exists) {
      setItem("favorites", [...currentFavorites, newFavorite]);
    }
  };

  const handleNewQuote = () => {
    const currentCount = getItem("quote-count") || 0;
    setItem("quote-count", currentCount + 1);

    if (currentIndex < quotesArray.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div>
      <QuoteCount />
      <Header />
      <main>
        {currentQuote && (
          <Card
            quote={currentQuote.quote}
            author={currentQuote.author}
            tag={currentQuote.tag}
            OnNewQuote={handleNewQuote}
            OnAddFavorite={handleAddFavorite}
          />
        )}
      </main>
      <aside>
        <FavoritesDrawer />
      </aside>
    </div>
  );
}

export default App;
