import { useState } from "react";
import { DRINK_RECIPES_BASE_ENDPOINT, MEAL_RECIPES_BASE_ENDPOINT } from "../utils/endpoints";
import IMealRecipe from "../interfaces/IMealRecipe";
import IDrinkRecipe from "../interfaces/IDrinkRecipe";
import { IDrinksResponseStructure, IMealsResponseStructure } from "../interfaces/IResponseOptions";

export default function useRecipesByCategory() {
  const [recipesByCategory, setRecipesByCategory] = useState<IMealRecipe[] | IDrinkRecipe[]>([]);

  const deconstructDataByType = (
    type: string,
    data: (IMealsResponseStructure | IDrinksResponseStructure)
  ) => {
    if (type === 'meals') {
      const actual = data as IMealsResponseStructure;
      return actual.meals;
    }
    const actual = data as IDrinksResponseStructure;
    return actual.drinks;
  };

  const fetchRecipes = async (recipeType: string, category:string) => {
    let endpoint = '';
    if (recipeType === 'meals') {
      endpoint = `${MEAL_RECIPES_BASE_ENDPOINT}${category}`;
    } else {
      endpoint = `${DRINK_RECIPES_BASE_ENDPOINT}${category}`;
    }
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      const result = deconstructDataByType(recipeType, data);
      setRecipesByCategory(result);
    } catch (err) {
      console.log('Error while fetching: ', err);
      fetchRecipes(recipeType, category);
    }
  };

  return {
    recipesByCategory,
    fetchRecipes,
  };
}