import { IngredientModel } from '../models/ingredients.js';


const recipe = new IngredientModel();

const findAll = async (_req, res) => {
    try{
        const ingredients = await recipe.findAll();
        res.json(ingredients);
    } catch (err){
        res.status(400).json(err);
    }
    
}

const findById = async (req, res) => {
    try{
        const ingredient = await recipe.findById(req.params.id);
        res.json(ingredient);
    } catch (err){
        res.status(400).json(err)
    }
   
}

const create = async (req, res) => {
    try {
        const ingredient = {
            id: req.body.id,
            name: req.body.name,
        }

        const newIngredient = await recipe.create(ingredient)
        res.json(newIngredient)
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

const updateById = async (req, res) => {
    try {
        const ingredient = {
            id: req.params.id,
            name: req.body.name,
        }

        const updatedIngredient = await recipe.updateById(ingredient)
        res.json(updatedIngredient)
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

const destroy = async (req, res) => {
    try {
        const deleted = await recipe.delete(req.params.id);
        res.json(deleted);
    } catch (err){
        res.status(400).json(err);
    }
    
}

const ingredientRoutes = (app) => {
    app.get('/ingredients', findAll)
    app.post('/ingredients', create)
    app.get('/ingredients/:id', findById)
    app.put('/ingredients/:id', updateById)
    app.delete('/ingredients/:id', destroy)
}

export default ingredientRoutes;