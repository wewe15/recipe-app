import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Recipe = (props) => {
    return (
        <div className="recipe-info">
            <h1>Title: {props.title}</h1>
            <p>Ingredients: {props.ingredient}</p>
            <img src={`http://localhost:3001/${props.image}`} alt={props.title}></img>
            <button type="button" onClick={props.deleteRecipe}>
                <DeleteIcon/>
            </button>
        </div>
    )
}

export default Recipe;