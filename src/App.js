import './App.css';
import Navbar from './components/Navbar/Navbar';

import { useState } from 'react';
import Footer from './components/Footer/Footer';
import NewsContent from './components/NewsContent/NewsContent';

function App() {
  const [category, setCategory] = useState('General');
  return (
    <>
    <Navbar setCategory={setCategory}/>
    <NewsContent />
    <Footer />
    </>
  );
}

export default App;
