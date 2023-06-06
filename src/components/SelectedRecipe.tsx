import { useEffect, useState } from "react"
import convertIntoGenericRecipeFormat from "../utils/convertIntoGenericRecipeFormat";
import { IGenericRecipeByIdFormat, ISelectedRecipesProps } from "../interfaces/IRecipeById";
import exitIcon from '../assets/exit.svg';

export default function SelectedRecipe(
  { actualRecipe, handlePopUpRecipe }: ISelectedRecipesProps
) {
  const [recipe, setRecipe] = useState<IGenericRecipeByIdFormat>();
  const [showIngredients, setShowIngredients] = useState(false);

  useEffect(() => {
    const result = convertIntoGenericRecipeFormat(actualRecipe);
    setRecipe(result as IGenericRecipeByIdFormat);
  }, [actualRecipe])

  const handleIngredients = () => {
    showIngredients ? setShowIngredients(false) : setShowIngredients(true);
  }

  return (
    <>
      <div
        className='flex h-12 justify-between items-center mb-6 bg-meat-brown rounded-t-xl'
      >
        <h1 className='text-2xl ml-4 text-white'>
          {recipe?.recipeName}
        </h1>
        <button
          className='mr-4 border-solid border w-8 rounded-full border-black text-center'
          onClick={() => handlePopUpRecipe('', '')}
        >
          <img src={exitIcon} alt='exit button' />
        </button>
      </div>

      <div className='flex'>
        <div className='flex flex-col'>
          <img src={recipe?.recipeThumb} className='w-64 border-non rounded mx-4' />
          {/* Tags here */}
        </div>
        <p className='flex-1 mr-8 text-justify h-64 overflow-auto'>{recipe?.recipeInstructions}</p>
      </div>

      <div className='flex flex-col ml-4 my-4'>
        {
          showIngredients ? (
            <div>
              <h2 className='text-xl'>Ingredients</h2>
              <hr />
              <table className='mt-2 table-auto'>
                <tbody>
                  {
                    recipe?.recipeIngredients.map((ingredient, index) => {
                      if (ingredient !== null) {
                        return (
                          <tr>
                            <td className='w-36'>{recipe.recipeMeasures[index]}</td>
                            <td>{ingredient}</td>
                          </tr>
                        );
                      }
                    })
                  }
                </tbody>
              </table>
              <p onClick={handleIngredients}>Hide ingredients</p>
            </div>
          ) : (
            <div>
              <h2 onClick={handleIngredients}>Show ingredients</h2>
            </div>
          )
        }
      </div>
    </>
  )
}
