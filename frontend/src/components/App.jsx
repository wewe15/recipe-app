import React, {useState, useEffect} from "react";
import { fetchRecipes, deleteRecipes,  } from "../api/index.js";
import Recipe from "./Recipe.jsx";
import AddForm from "./AddForm.jsx";


function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetchRecipes().then((res) => {
      setRecipes(res.data || 'No recipes found.')
    });
  }, [])
  return (
    <div>
     <header>Recipe App</header>
     <AddForm/>
      {
        recipes.map(recipe => {
          return (
            <Recipe
              key={recipe.id}
              title={recipe.title}
              ingredient={recipe.ingredient_id}
              image={recipe.image}
              deleteRecipe={() => deleteRecipes(recipe.id)}
            />
          );
        })
      }
    </div>
  );
}

export default App;
