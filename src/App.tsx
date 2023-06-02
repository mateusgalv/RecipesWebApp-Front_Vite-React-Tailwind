import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Recipes from './pages/Recipes';
import CategoryRecipes from './pages/CategoryRecipes';
import './index.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meals" element={<Recipes type={'meals'} />} />
      <Route path="/drinks" element={<Recipes type={'drinks'} />} />
      <Route path="/:type/:category" element={<CategoryRecipes />} />
    </Routes>
  )
}

