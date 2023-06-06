import { useEffect, useState } from 'react';
import useMealCategory from '../hooks/useMealCategory';
import useDrinkCategory from '../hooks/useDrinkCategory';
import Header from '../components/Header';
import IRecipeType from '../interfaces/IRecipeType';
import '../index.css';
import RecipeCategory from '../components/RecipeCategory';
import Background from '../components/Background';

export default function Recipes(props: IRecipeType) {
  const { mealCategory, fetchMealCategory } = useMealCategory();
  const { drinkCategory, fetchDrinkCategory } = useDrinkCategory();
  const [recipeType, setRecipeType] = useState('');
  const { type } = props;

  useEffect(() => {
    const fetchData = async () => {
      if (type === 'meals') {
        await fetchMealCategory();
        setRecipeType('meals');
      } else {
        await fetchDrinkCategory();
        setRecipeType('drinks');
      }
    }

    fetchData();
  }, [type, fetchMealCategory, fetchDrinkCategory, setRecipeType])


  return (
    <div>
      <Header />
      <Background>
        <div className='flex flex-wrap justify-center items-center z-1 w-3/4'>
          {
            <RecipeCategory
              recipeType={recipeType}
              mealCategory={mealCategory}
              drinkCategory={drinkCategory}
            />
          }
        </div>
      </Background>
    </div>
  )
}