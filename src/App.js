import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import { apiKey } from './config/config';

function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResult, setNewsResult] = useState();
  const [loadMore, setLoadMore] = useState(20);
  const [category, setCategory] = useState('General');
  const [loading, setLoading] = useState(false);
    ;
  const newsApi = async () => {
    try {
      setLoading(true);
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`)
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults)
      setLoading(false);
    }
    catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResult, category, loadMore])
  return (
    <>
      <Navbar setCategory={setCategory} />
      {newsResult && (<NewsContent newsArray={newsArray} newsResult={newsResult} loadMore={loadMore} setLoadMore={setLoadMore} loading={loading}/>)}
      <Footer />
    </>
  );
}

export default App;
