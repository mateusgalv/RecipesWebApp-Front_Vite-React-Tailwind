import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Recipes from './pages/Recipes';
import './index.css';

export default function App() {
  // Endpoints
  const MEAL_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const DRINK_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meals" element={<Recipes mealsEndpoint={MEAL_CATEGORIES} />} />
      <Route path="/drinks" element={<Recipes drinksEndpoint={DRINK_CATEGORIES} />} />
    </Routes>
  )
}

