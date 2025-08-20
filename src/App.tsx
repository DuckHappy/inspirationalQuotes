import "./App.css";
import { CacheProvider } from "./context/cache.tsx";
import QuoteCount from "./components/QuoteCount.tsx";
import Header from "./components/Header.tsx";
import FavoritesDrawer from "./components/favorites/favorites.tsx";
import Card from "./components/Card/Card.tsx";
import quotes from "../mockup/useQuoteApi.json";

function App() {
  return (
    <CacheProvider>
      <div>
        <QuoteCount />
        <Header />
        <main>
          <Card quote={quotes[1].quote} author={quotes[1].author} />
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
