import axios from 'axios';

const url = "http://localhost:3001/recipes";

export async function fetchRecipes() {
    try {
      const response = await axios.get(url);
      return JSON.stringify(response.data, null, 2)
    } catch (error) {
      console.error(error);
    }
}