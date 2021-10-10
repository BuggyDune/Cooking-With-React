import React, { useContext } from "react"
import { RecipeContext } from "./App"
import IngredientList from "./IngredientList"

export default function Recipe(props) {
  const {
    id,
    name,
    servings,
    cookTime,
    instructions,
    ingredients
  } = props

  const {handleRecipeDelete} = useContext(RecipeContext)
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button className="btn btn--primary mr-1">Edit</button>
          <button
            onClick={() => handleRecipeDelete(id)}
            className="btn btn--danger"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__instructions recipe__value--idented">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value recipe__value--idented">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  )
}
