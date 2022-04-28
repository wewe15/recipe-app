import React, { useState } from 'react';
import axios from 'axios';


const AddForm = () => {
    const [recipe, setRecipe] = useState({
        title: "",
        ingredient_id: "",
        image: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setRecipe(prevRecipe => {
            return {
                ...prevRecipe,
                [name]: value,
            };
        });
    }

    function onSubmit(e) {
        e.preventDefault()
        let imageFile = document.querySelector('#file')
        let formData = new FormData()
        formData.append("title", recipe.title)
        formData.append("ingredient_id", recipe.ingredient_id)
        formData.append("image", imageFile.files[0])
        axios.post("http://localhost:3001/recipes", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res)
            return res
        })
        setRecipe({
            title: "",
            ingredient_id: "",
            image: "",
        })
    }
    return (
        <div>
            <form className="create-recipe">
                <input type="text" name="title" value={recipe.title} placeholder="Recipe Name" onChange={handleChange} />
                <input type="text" name="ingredient_id" value={recipe.ingredient_id} placeholder="Recipe Ingredients" onChange={handleChange} />
                <input type="file" id="file" name="image" accept="image/*" onChange={handleChange} />
                <button type="submit" onClick={onSubmit}>
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddForm;