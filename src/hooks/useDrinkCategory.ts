import { useState } from 'react';
import ICategories from '../interfaces/ICategories';
import IDrinkCategory from '../interfaces/IDrinkCategory';
import { DRINK_CATEGORIES } from '../utils/endpoints';

export default function useDrinkCategory(): IDrinkCategory {
  const [drinkCategory, setDrinkCategory] = useState<null | ICategories[]>(null);

  const fetchDrinkCategory = async () => {
    if (drinkCategory === null) {
      try {
        const response = await fetch(DRINK_CATEGORIES);
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