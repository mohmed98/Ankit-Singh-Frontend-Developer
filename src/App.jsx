import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
