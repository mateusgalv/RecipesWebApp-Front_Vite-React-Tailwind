import IDrinkRecipe from "./IDrinkRecipe";
import IMealRecipe from "./IMealRecipe";

export interface ICurrentRecipeList {
  id: string | undefined,
  recipeName: string | undefined,
  recipeThumb: string | undefined,
  type: string,
}

export interface IMealsOrDrinks {
  idMeal?: string,
  idDrink?: string,
  strMeal?: string,
  strDrink?: string,
  strMealThumb?: string,
  strDrinkThumb?: string,
}

export type RecipeCardProps = {
  recipesByCategory: (IMealRecipe | IDrinkRecipe)[],
  recipeType: 'meals' | 'drinks',
  handlePopUpRecipe: (type: string, id: string) => void,
};