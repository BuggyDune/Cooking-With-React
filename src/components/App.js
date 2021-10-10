import React, { useState, useEffect } from "react"
import RecipeList from "./RecipeList"
import "../scss/main.scss"
import { uuid } from "uuidv4"
import { sampleRecipes } from "./API"

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes"

function App() {
  const RecipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
  }
  const [recipes, setRecipes] = useState(sampleRecipes)

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuid(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr",
      ingredients: [
        {
          id: uuid(),
          name: "Name",
          amount: "1 Tbs"
        },
      ],
    }

    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={RecipeContextValue}>
      <RecipeList
        recipes={recipes}
        handleRecipeAdd={handleRecipeAdd}
        handleRecipeDelete={handleRecipeDelete}
      />
    </RecipeContext.Provider>
  )
}

export default App
