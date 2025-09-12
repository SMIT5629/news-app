import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { fetchNews } from "./lib/newsApi";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import "./App.css";

const App = () => {
  const [filters, setFilters] = useState({
    language: "en",
    country: "us",
    category: "business",
  });

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const data = await fetchNews(filters);
      setArticles(data);
      setLoading(false)
    };
    getNews();
  }, [filters]);

  return (
    <div className="app-container">
      <Navbar filters={filters} setFilters={setFilters} />
      <div className="news-container">
        {loading ? (
          <Spinner />
        ) : (
          articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;
