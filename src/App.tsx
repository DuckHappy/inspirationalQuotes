import "./App.css";
import { CacheProvider, useCacheContext } from "./context/cache.tsx";
import QuoteCount from "./components/QuoteCount.tsx";
import Header from "./components/Header.tsx";
import FavoritesDrawer from "./components/favorites/favorites.tsx";
import Card from "./components/Card/Card.tsx";
import quotes from "../mockup/useQuoteApi.json";
import { useState } from "react";


function App() {  const [currentIndex, setCurrentIndex] = useState(0);

  const quotesArray = Object.values(quotes).filter(Boolean);
  const currentQuote = quotesArray[currentIndex];

  return (
    <CacheProvider>
      <AppContent
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        quotesArray={quotesArray}
        currentQuote={currentQuote}
      />
    </CacheProvider>
  );
}

function AppContent({ currentIndex, setCurrentIndex, quotesArray, currentQuote }) {
  const { getItem, setItem } = useCacheContext();

  const getNewQuoteIndex = () => {
    let idx = Math.floor(Math.random() * quotesArray.length);
    while (idx === currentIndex && quotesArray.length > 1) {
      idx = Math.floor(Math.random() * quotesArray.length);
    }
    return idx;
  };

  const handleNewQuote = () => {
    setCurrentIndex(getNewQuoteIndex());
    const count = getItem("quote-count") || 1;
    setItem("quote-count", count + 1);
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
            onAddFavorite={() => {}}
            onNewQuote={handleNewQuote}
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
