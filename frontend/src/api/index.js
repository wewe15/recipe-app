import axios from 'axios';

const url = "http://localhost:3001/recipes";

export async function fetchRecipes() {
    try {
      const response = await axios.get(url);
      return response
    } catch (error) {
      console.error(error);
    }
}

export async function deleteRecipes(id) {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response
  } catch (error) {
    console.error(error);
  }
}
