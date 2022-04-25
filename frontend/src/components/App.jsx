import React, {useState, useEffect} from "react";
import { fetchRecipes } from "../api/index.js";


function App() {
  const [recipes, setRecipes] = useState("")

  useEffect(() => {
    fetchRecipes().then((res) => {
      setRecipes(res || 'No recipes found.')
    });
  }, [])
  return (
    <div>
        <pre>
          {recipes}
        </pre>
    </div>
  );
}

export default App;
