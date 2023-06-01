import { useEffect, useState } from 'react';
import useMealCategory from '../hooks/useMealCategory';
import useDrinkCategory from '../hooks/useDrinkCategory';
import Header from '../components/Header';
import IRecipeType from '../interfaces/IRecipeType';
import '../index.css';

export default function Meals(props: IRecipeType) {
  const { mealCategory, fetchMealCategory } = useMealCategory();
  const { drinkCategory, fetchDrinkCategory } = useDrinkCategory();
  const [recipeType, setRecipeType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (Object.keys(props)[0] === 'mealsEndpoint') {
        await fetchMealCategory();
        setRecipeType('meals');
      } else {
        await fetchDrinkCategory();
        setRecipeType('drinks');
      }
    }

    fetchData();
  }, [props, fetchMealCategory, fetchDrinkCategory, setRecipeType])


  return (
    <div>
      <Header />
      <div className='absolute inset-0 top-14 z-0 transparent-background z-1'></div>
      <div className='z-1'>
        {
          recipeType === 'meals' ? (
            mealCategory !== null && (
              mealCategory.map((category) => (
                <p>{category.strCategory}</p>
              ))
            )
          ) : (
            drinkCategory !== null && (
              drinkCategory.map((category) => (
                <p>{category.strCategory}</p>
              ))
            )
          )
        }
      </div>
    </div>
  )
}