import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Recipes from './pages/Recipes';
import CategoryRecipes from './pages/CategoryRecipes';
import './index.css';
import Login from './pages/Login';
import { UserContextProvider } from './context/userContext';

export default function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/meals' element={<Recipes type={'meals'} />} />
        <Route path='/drinks' element={<Recipes type={'drinks'} />} />
        <Route path='/:type/:category' element={<CategoryRecipes />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </UserContextProvider>
  )
}

