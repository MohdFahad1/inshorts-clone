import './App.css';
import Navbar from './components/Navbar/Navbar';

import { useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
  const [category, setCategory] = useState('General');
  return (
    <div className="App">
    <Navbar setCategory={setCategory}/>
      
    <Footer />
    </div>
  );
}

export default App;
