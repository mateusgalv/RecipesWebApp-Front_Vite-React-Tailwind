import IMealRecipe from './IMealRecipe';
import IDrinkRecipe from './IDrinkRecipe';

export interface IMealsResponseStructure {
  meals: IMealRecipe[];
}

export interface IDrinksResponseStructure {
  drinks: IDrinkRecipe[];
}