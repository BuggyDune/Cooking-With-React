import { uuid } from "uuidv4"

export const sampleRecipes = [
  {
    id: uuid(),
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: uuid(),
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: uuid(),
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: uuid(),
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions:
      "1. Put paprika on pork\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: uuid(),
        name: "Pork",
        amount: "2.5 Pounds",
      },
      {
        id: uuid(),
        name: "Paprika",
        amount: "1 Tbs",
      },
    ],
  },
]
