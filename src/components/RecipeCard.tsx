import { useEffect, useState } from "react";
import {
  ICurrentRecipeList,
  IMealsOrDrinks,
  RecipeCardProps
} from "../interfaces/RecipeCardPropsAndTypes";

export default function RecipeCard(
  { recipesByCategory, recipeType, handlePopUpRecipe }: RecipeCardProps
) {
  const [
    currentRecipes,
    setCurrentRecipes
  ] = useState<ICurrentRecipeList[]>([]);

  useEffect(() => {
    const recipes = (recipesByCategory as IMealsOrDrinks[])
      .map((recipe) => {
        const {
          idMeal,
          idDrink,
          strMeal,
          strDrink,
          strMealThumb,
          strDrinkThumb,
        } = recipe;

        // creates generic structure so it can be used by both routes (/meals and /drinks)
        return {
          id: idMeal ? idMeal : idDrink,
          recipeName: strMeal ? strMeal : strDrink,
          recipeThumb: strMealThumb ? strMealThumb : strDrinkThumb,
          type: idMeal ? 'meals' : 'drinks',
        };
      });
    setCurrentRecipes(recipes);
  }, [recipeType, recipesByCategory])

  return (
    <div className='flex flex-wrap w-11/12 ml-4 justify-start'>
      {
        currentRecipes.map((recipe) => (
          <div
            key={recipe.recipeName}
            className='w-32 h-52 border-2 rounded-lg m-2 flex flex-col text-center'
            onClick={() => handlePopUpRecipe(recipe.type, recipe.id as string)}
          >
            <div className='h-40 '>
              <img className='max-w-full' src={recipe.recipeThumb} alt={recipe.recipeName} />
            </div>
            <div className=''>
              <p className='text-xs'>{recipe.recipeName}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
