import { Link } from "react-router-dom";
import IRecipeCategoryProps from "../interfaces/IRecipeCategoryProps";

export default function RecipeCategory({
  recipeType,
  mealCategory,
  drinkCategory,
}: IRecipeCategoryProps) {
  return (
    <>
      {
        recipeType === 'meals' ? (
          mealCategory !== null && (
            mealCategory.map((category) => (
              <Link to={`/meals/${category.strCategory}`} key={category.strCategory}>
                <div className='w-32 h-24 border-2 rounded m-2 flex justify-center items-center text-center'>
                  <p>{category.strCategory}</p>
                </div>
              </Link>
            ))
          )
        ) : (
          drinkCategory !== null && (
            drinkCategory.map((category) => (
              <Link to={`/drinks/${category.strCategory}`} key={category.strCategory}>
                <div className='w-32 h-24 border-2 rounded m-2 flex justify-center items-center text-center'>
                  <p>{category.strCategory}</p>
                </div>
              </Link>
            ))
          )
        )
      }
    </>
  );
}
