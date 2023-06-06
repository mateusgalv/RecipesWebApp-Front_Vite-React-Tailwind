import ICategories from './ICategories';

export default interface IDrinkCategory {
  drinkCategory: null | ICategories[];
  fetchDrinkCategory: () => Promise<void>;
}