import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card/Card.tsx";
import { CacheProvider } from "./context/cache.tsx";
import quotes from "../mockup/useQuoteApi.json";
import QuoteCount from "./components/QuoteCount.tsx";
import Header from "./components/Header.tsx";
import FavoritesDrawer from "./components/favorites/favorites.tsx";

function App() {
  return (
    <CacheProvider>
      <div>
        <Header />

        <QuoteCount />
        <FavoritesDrawer />

        <main>
          <Card quote={quotes[1].quote} author={quotes[1].author} />
        </main>
        <></>
      </div>
    </CacheProvider>
  );
}

export default App;
