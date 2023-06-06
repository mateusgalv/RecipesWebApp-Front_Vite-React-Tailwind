import { useParams } from "react-router-dom"
import { useCallback, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import useRecipesByCategory from "../hooks/useRecipesByCategory";
import useIsLoading from "../hooks/useIsLoading";
import RecipeCard from "../components/RecipeCard";
import CategoriesCarousel from "../components/CategoriesCarousel";
import useRecipeSelection from "../hooks/useRecipeSelection";
import SelectedRecipe from "../components/SelectedRecipe";
import { IRecipeById } from "../interfaces/IRecipeById";

export default function CategoryRecipes() {
  const { type: recipeType, category } = useParams();
  const { recipesByCategory, fetchRecipes } = useRecipesByCategory();
  const { actualRecipe, fetchRecipe } = useRecipeSelection();
  const { isLoading, setLoading } = useIsLoading();
  const fetchRecipesRef = useRef(fetchRecipes);
  const setLoadingRef = useRef(setLoading);
  const [hasSelectedRecipe, setHasSelectedRecipe] = useState(false);

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

  const handlePopUpRecipe = async (recipeType: string, id: string) => {
    if (hasSelectedRecipe === false) {
      await fetchRecipe(recipeType, id);
      setHasSelectedRecipe(true);
    } else {
      setHasSelectedRecipe(false);
    }
  }

  return (
    <div>
      <Header />
      <CategoriesCarousel />
      <div>
        {
          hasSelectedRecipe ? (
            <div
              className='flex flex-col bg border-solid border rounded-xl border-rusty-red mx-auto mt-4 w-5/6'
            >
              <SelectedRecipe
                actualRecipe={actualRecipe as IRecipeById}
                handlePopUpRecipe={handlePopUpRecipe}
              />
            </div>
          ) : (
            <>
              <p className='text-3xl ml-6 mt-4 text-crayola font-semibold'>{category}</p>
              <hr className='ml-6 text-crayola w-11/12' />
              {
                // To do: Loading component
                isLoading ? (<p>...Loading</p>) : (
                  recipeType && (
                    <RecipeCard
                      recipesByCategory={recipesByCategory}
                      recipeType={recipeType as 'meals' | 'drinks'}
                      handlePopUpRecipe={handlePopUpRecipe}
                    />
                  )
                )
              }
            </>
          )
        }
      </div>
    </div>
  )
}
