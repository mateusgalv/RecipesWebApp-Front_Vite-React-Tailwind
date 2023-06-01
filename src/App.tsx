import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import './index.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meals" element={<Meals />} />
      <Route path="/drinks" element={<Drinks />} />
    </Routes>
  )
}

