import express from 'express';
import bodyParser from 'body-parser';
import ingredientRoutes from './handelrs/ingredients.js';
import recipeRoutes from './handelrs/recipes.js'

const app = express();
const address = "0.0.0.0:3000";

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use('/uploads', express.static('../uploads'))

app.get('/', function (_req, res) {
    res.send('Hello World!');
});

ingredientRoutes(app);
recipeRoutes(app);

app.use((_req, res) => {
    res.status(404).json({message: 'oh you are lost.'})
})


app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
})

export default app;