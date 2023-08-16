import { Header } from "./components/Header.jsx";
import { MainArticle } from "./components/MainArticle.jsx";
import { NewContainer } from "./components/NewContainer.jsx";
import { ArticlesContainer } from "./components/ArticlesContainer.jsx";

function App() {
 
  return (
    <main className="px-4 pt-6">
      <Header />
      <div className="lg:flex lg:gap-8">
        <MainArticle />
        <NewContainer />
      </div>
      <ArticlesContainer />
    </main>
  )
}

export default App
