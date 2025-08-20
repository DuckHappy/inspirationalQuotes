import "./App.css";
import { CacheProvider } from "./context/cache.tsx";
import QuoteCount from "./components/QuoteCount.tsx";
import Header from "./components/Header.tsx";
import FavoritesDrawer from "./components/favorites/favorites.tsx";
import Card from "./components/Card/Card.tsx";
import quotes from "../mockup/useQuoteApi.json";
import { useState } from "react";


function App() {
  // Manage current quote index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get current quote
  const quotesArray = Object.values(quotes).filter(Boolean); // filter out falsy values
  const currentQuote = quotesArray[currentIndex];

  // Function to get a new random quote index (not the same as current)
  const getNewQuoteIndex = () => {
    let idx = Math.floor(Math.random() * quotesArray.length);
    while (idx === currentIndex && quotesArray.length > 1) {
      idx = Math.floor(Math.random() * quotesArray.length);
    }
    return idx;
  };

  // Handler to change quote
  const handleNewQuote = () => {
    setCurrentIndex(getNewQuoteIndex());
  };

  return (
    <CacheProvider>
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
        <></>
      </div>
    </CacheProvider>
  );
}

export default App;
