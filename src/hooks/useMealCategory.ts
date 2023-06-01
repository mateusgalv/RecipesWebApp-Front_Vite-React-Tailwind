import { useState } from 'react';
import ICategories from '../interfaces/ICategories';
import IMealCategory from '../interfaces/IMealCategory';

const CATEGORIES_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

export default function useMealCategory(): IMealCategory {
  const [mealCategory, setMealCategory] = useState<null | ICategories[]>(null);

  const fetchMealCategory = async () => {
    if (mealCategory === null) {
      try {
        const response = await fetch(CATEGORIES_ENDPOINT);
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