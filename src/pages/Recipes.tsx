import { useEffect, useState } from 'react';
import useMealCategory from '../hooks/useMealCategory';
import useDrinkCategory from '../hooks/useDrinkCategory';
import Header from '../components/Header';
import IRecipeType from '../interfaces/IRecipeType';
import '../index.css';
import { Link } from 'react-router-dom';

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
      {/* <div className='absolute inset-0 top-14 z-0 transparent-background z-1'></div> */}
      <div className='flex flex-wrap justify-center items-center z-1 w-3/4'>
        {
          recipeType === 'meals' ? (
            mealCategory !== null && (
              mealCategory.map((category) => (
                <Link to={`/meals/${category.strCategory}`}>
                  <div className='w-32 h-24 border-2 rounded m-2 flex justify-center items-center text-center' style={{ opacity: 1 }}>
                    <p>{category.strCategory}</p>
                  </div>
                </Link>
              ))
            )
          ) : (
            drinkCategory !== null && (
              drinkCategory.map((category) => (
                <div className='w-32 h-24 border-2 rounded m-2 flex justify-center items-center text-center' style={{ opacity: 1 }}>
                  <p>{category.strCategory}</p>
                </div>
              ))
            )
          )
        }
      </div>
    </div>
  )
}