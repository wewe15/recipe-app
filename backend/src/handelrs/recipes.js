import { RecipeModel } from '../models/recipes.js';
import multer from 'multer';


const recipe = new RecipeModel();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
});

const findAll = async (_req, res) => {
    try{
        const recipes = await recipe.findAll();
        res.json(recipes);
    } catch (err){
        res.status(400).json(err);
    }
    
}

const findById = async (req, res) => {
    try{
        const recipe1 = await recipe.findById(req.params.id);
        res.json(recipe1);
    } catch (err){
        res.status(400).json(err)
    }
   
}

const create = async (req, res) => {
    try {
        const recipe1 = {
            id: req.body.id,
            title: req.body.title,
            ingredient_id: req.body.ingredient_id,
            image: req.file.path
        }
        const newRecipe = await recipe.create(recipe1)
        res.json(newRecipe)
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

const updateById = async (req, res) => {
    try {
        const recipe1 = {
            id: req.params.id,
            title: req.body.title,
            ingredient_id: req.body.ingredient_id,
            image: req.file.path
        }
        const updatedRecipe = await recipe.updateById(recipe1)
        res.json(updatedRecipe)
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

const recipeRoutes = (app) => {
    app.get('/recipes', findAll)
    app.post('/recipes', upload.single('image'), create)
    app.get('/recipes/:id', findById)
    app.put('/recipes/:id', upload.single('image'), updateById)
    app.delete('/recipes/:id', destroy)
}

export default recipeRoutes;