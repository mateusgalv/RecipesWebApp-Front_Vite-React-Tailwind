import { useParams } from "react-router-dom"
import { useCallback, useEffect, useRef } from "react";
import Header from "../components/Header";
import useRecipesByCategory from "../hooks/useRecipesByCategory";
import IMealRecipe from "../interfaces/IMealRecipe";
// import IDrinkRecipe from "../interfaces/IDrinkRecipe";
import useIsLoading from "../hooks/useIsLoading";
import IDrinkRecipe from "../interfaces/IDrinkRecipe";

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

  console.log(recipesByCategory)
  return (
    <div>
      <Header />
      { // To do: Loading component
        isLoading ? (<p>...Loading</p>) : (
          recipeType === 'meals' ? (
            recipesByCategory !== null && (
              (recipesByCategory as IMealRecipe[]).map((recipe) => (
                <p>{recipe.strMeal}</p>
              ))
            )
          ) : (
            recipesByCategory !== null && (
              (recipesByCategory as IDrinkRecipe[]).map((recipe) => (
                <p>{recipe.strDrink}</p>
              ))
            )
          )
        )
      }
    </div>
  )
}
