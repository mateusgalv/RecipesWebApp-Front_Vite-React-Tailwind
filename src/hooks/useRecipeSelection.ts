import { useState } from "react";
import { DRINK_BY_ID, MEAL_BY_ID } from "../utils/endpoints";
import {
  IMealByIdResponse,
  IDrinkByIdResponse,
  IRecipeById,
} from "../interfaces/IRecipeById";

export default function useRecipeSelection() {
  const [actualRecipe, setActualRecipe] = useState<IRecipeById>();

  const deconstructDataByType = (
    type: string,
    data: (IMealByIdResponse | IDrinkByIdResponse)
  ) => {
    if (type === 'meals') {
      const actual = data as IMealByIdResponse;
      return actual.meals[0];
    }
    const actual = data as IDrinkByIdResponse;
    return actual.drinks[0];
  }

  const fetchRecipe = async (recipeType: string, id: string) => {
    let endpoint = '';
    if (recipeType === 'meals') {
      endpoint = `${MEAL_BY_ID}${id}`;
    } else {
      endpoint = `${DRINK_BY_ID}${id}`;
    }
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      const result = deconstructDataByType(recipeType, data);
      
      setActualRecipe(result);
    } catch (err) {
      console.log('Error while fetching: ', err);
      fetchRecipe(recipeType, id);
    }
  };

  return {
    actualRecipe,
    fetchRecipe,
  };
}