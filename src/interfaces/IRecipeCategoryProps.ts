import ICategories from "./ICategories";

export default interface IRecipeCategoryProps {
  recipeType: string,
  mealCategory: null | ICategories[],
  drinkCategory: null | ICategories[],
}