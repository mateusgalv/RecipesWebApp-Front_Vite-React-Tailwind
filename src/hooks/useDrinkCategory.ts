import { useState } from 'react';
import ICategories from '../interfaces/ICategories';
import IDrinkCategory from '../interfaces/IDrinkCategory';

const CATEGORIES_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

export default function useDrinkCategory(): IDrinkCategory {
  const [drinkCategory, setDrinkCategory] = useState<null | ICategories[]>(null);

  const fetchDrinkCategory = async () => {
    if (drinkCategory === null) {
      try {
        const response = await fetch(CATEGORIES_ENDPOINT);
        const data = await response.json();
        const { drinks } = data;

        setDrinkCategory(drinks as ICategories[]);
      } catch (err) {
        console.log('Error while fetching: ', err);
        fetchDrinkCategory();
      }
    }
  };

  return {
    drinkCategory,
    fetchDrinkCategory,
  };
}