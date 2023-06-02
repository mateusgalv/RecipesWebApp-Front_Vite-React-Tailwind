import { useState } from 'react';
import { MEAL_CATEGORIES } from '../utils/endpoints';
import ICategories from '../interfaces/ICategories';
import IMealCategory from '../interfaces/IMealCategory';

export default function useMealCategory(): IMealCategory {
  const [mealCategory, setMealCategory] = useState<null | ICategories[]>(null);

  const fetchMealCategory = async () => {
    if (mealCategory === null) {
      try {
        const response = await fetch(MEAL_CATEGORIES);
        const data = await response.json();
        const { meals } = data;

        setMealCategory(meals as ICategories[]);
      } catch (err) {
        console.log('Error while fetching: ', err);
        fetchMealCategory();
      }
    }
  };

  return {
    mealCategory,
    fetchMealCategory,
  };
}