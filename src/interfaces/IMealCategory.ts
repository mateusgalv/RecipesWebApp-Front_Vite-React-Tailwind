import ICategories from './ICategories';

export default interface IMealCategory {
  mealCategory: null | ICategories[];
  fetchMealCategory: () => Promise<void>;
}