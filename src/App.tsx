import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
