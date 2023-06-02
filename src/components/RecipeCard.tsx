import { useEffect, useState } from "react";
import IDrinkRecipe from "../interfaces/IDrinkRecipe";
import IMealRecipe from "../interfaces/IMealRecipe";

interface ICurrentRecipeList {
  id: string | undefined,
  recipeName: string | undefined,
  recipeThumb: string | undefined,
}

interface IMealsAndDrinks {
  idMeal?: string,
  idDrink?: string,
  strMeal?: string,
  strDrink?: string,
  strMealThumb?: string,
  strDrinkThumb?: string,
}

type RecipeCardProps = {
  recipesByCategory: (IMealRecipe | IDrinkRecipe)[],
  recipeType: 'meals' | 'drinks',
};

export default function RecipeCard({ recipesByCategory, recipeType }: RecipeCardProps) {
  const [currentRecipes, setCurrentRecipes] = useState<ICurrentRecipeList[]>([]);

  useEffect(() => {
    const recipes = (recipesByCategory as IMealsAndDrinks[]).map((recipe) => {
      const {
        idMeal,
        idDrink,
        strMeal,
        strDrink,
        strMealThumb,
        strDrinkThumb,
      } = recipe;

      return {
        id: idMeal ? idMeal : idDrink,
        recipeName: strMeal ? strMeal : strDrink,
        recipeThumb: strMealThumb ? strMealThumb : strDrinkThumb,
      };
    });
    setCurrentRecipes(recipes);
  }, [recipeType, recipesByCategory])

  return (
    <div className='flex flex-wrap w-11/12 ml-4 justify-start'>
      {
        currentRecipes.map((recipe) => (
          <div className='w-32 h-52 border-2 rounded-lg m-2 flex flex-col text-center'>
          <div className='h-40 '>
            <img className='max-w-full' src={recipe.recipeThumb} />
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
