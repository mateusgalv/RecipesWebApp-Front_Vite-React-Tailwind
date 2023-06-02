import { useParams } from "react-router-dom"
import { useCallback, useEffect, useRef } from "react";
import Header from "../components/Header";
import useRecipesByCategory from "../hooks/useRecipesByCategory";
import useIsLoading from "../hooks/useIsLoading";
import RecipeCard from "../components/RecipeCard";

export default function CategoryRecipes() {
  const { type: recipeType, category } = useParams();
  const { recipesByCategory, fetchRecipes } = useRecipesByCategory();
  const { isLoading, setLoading } = useIsLoading();
  const fetchRecipesRef = useRef(fetchRecipes);
  const setLoadingRef = useRef(setLoading);

  const fetchData = useCallback(async () => {
    if (recipeType && category) {
      setLoadingRef.current();
      await fetchRecipesRef.current(recipeType, category);
      setLoadingRef.current();
    }
  }, [recipeType, category])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <div>
      <Header />
      <p className='text-3xl ml-6 mt-4 text-crayola font-semibold'>{category}</p>
      <hr className='ml-6 text-crayola w-11/12' />
      <div
        className='flex flex-wrap w-11/12 ml-4 justify-start'
      >
        { // To do: Loading component
          // also: refactor so the code is not repeated

          isLoading ? (<p>...Loading</p>) : (
            recipeType && (
              <RecipeCard
                recipesByCategory={recipesByCategory}
                recipeType={recipeType as 'meals' | 'drinks'}
              />
            )
          )
          // isLoading ? (<p>...Loading</p>) : (
          //   recipeType === 'meals' ? (
          //     recipesByCategory !== null && (
          //       (recipesByCategory as IMealRecipe[]).map((recipe) => (
          //         <div className='w-32 h-52 border-2 rounded-lg m-2 flex flex-col text-center'>
          //           <div className='h-40 '>
          //             <img className='max-w-full' src={recipe.strMealThumb} />
          //           </div>
          //           <div className=''>
          //             <p className='text-xs'>{recipe.strMeal}</p>
          //           </div>
          //         </div>
          //       ))
          //     )
          //   ) : (
          //     recipesByCategory !== null && (
          //       recipesByCategory !== null && (
          //         (recipesByCategory as IDrinkRecipe[]).map((recipe) => (
          //           <div className='w-32 h-52 border-2 rounded-lg m-2 flex flex-col text-center'>
          //             <div>
          //               <img className='max-w-full' src={recipe.strDrinkThumb} />
          //             </div>
          //             <div className=''>
          //               <p className=''>{recipe.strDrink}</p>
          //             </div>
          //           </div>
          //         ))
          //       )
          //     )
          //   )
          // )
        }
      </div>
    </div>
  )
}
