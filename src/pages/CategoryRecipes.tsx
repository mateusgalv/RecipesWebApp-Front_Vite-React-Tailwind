import { useParams } from "react-router-dom"
import { useCallback, useEffect, useRef } from "react";
import Header from "../components/Header";
import useRecipesByCategory from "../hooks/useRecipesByCategory";
import useIsLoading from "../hooks/useIsLoading";
import RecipeCard from "../components/RecipeCard";
import CategoriesCarousel from "../components/CategoriesCarousel";

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
      <CategoriesCarousel/>
      <p className='text-3xl ml-6 mt-4 text-crayola font-semibold'>{category}</p>
      <hr className='ml-6 text-crayola w-11/12' />
        {
          // To do: Loading component
          isLoading ? (<p>...Loading</p>) : (
            recipeType && (
              <RecipeCard
                recipesByCategory={recipesByCategory}
                recipeType={recipeType as 'meals' | 'drinks'}
              />
            )
          )
        }
    </div>
  )
}
