import { useEffect, useState } from "react"
import convertIntoGenericRecipeFormat from "../utils/convertIntoGenericRecipeFormat";
import { IGenericRecipeByIdFormat, IRecipeById, ISelectedRecipesProps } from "../interfaces/IRecipeById";

export default function SelectedRecipe(
  { actualRecipe, handlePopUpRecipe }: ISelectedRecipesProps
  // { actualRecipe, handlePopUpRecipe }: { actualRecipe: IRecipeById, handlePopUpRecipe: (recipeType: string, id: string) => Promise<void> },
) {
  const [recipe, setRecipe] = useState<IGenericRecipeByIdFormat>();

  useEffect(() => {
    const result = convertIntoGenericRecipeFormat(actualRecipe);
    setRecipe(result as IGenericRecipeByIdFormat);
  }, [actualRecipe])

  return (
    <>
      <div
        onClick={() => handlePopUpRecipe('', '')}
      >
        Close button</div>
      <div>
        <table>
          <th>{recipe?.recipeName}</th>
          {
            recipe?.recipeIngredients.map((ingredient, index) => {
              if (ingredient !== null && ingredient !== '') {
                return (
                  <tbody key={recipe.recipeName}>
                    <tr>
                      <td>{recipe?.recipeMeasures[index]}</td>
                      <td>{ingredient}</td>
                    </tr>
                  </tbody>
                );
              }
            })
          }
        </table>

      </div>
    </>
  )
}
