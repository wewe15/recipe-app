import express from 'express';
import bodyParser from 'body-parser';
import ingredientRoutes from './handelrs/ingredients.js';

const app = express();
const address = "0.0.0.0:3000";

app.use(bodyParser.json());

app.get('/', function (_req, res) {
    res.send('Hello World!');
});

ingredientRoutes(app);

app.use((_req, res) => {
    res.status(404).json({message: 'oh you are lost.'})
})


app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
})

export default app;