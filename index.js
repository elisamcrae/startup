const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

app.use(require("body-parser").json())

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetRecipes or Friends
apiRouter.get('/recipes', async (_req, res) => {
    const recipes = await DB.getRecipes();
    res.send(recipes);
});

apiRouter.get('/friends', async (_req, res) => {
    const friends = await DB.getFriends();
    res.send(friends);
  });

// SubmitRecipe or Friend
apiRouter.post('/recipe', async (req, res) => {
    DB.addRecipe(req.body);
    const recipes = await DB.getRecipes();
    res.send(recipes);
});

apiRouter.post('/friend', async (req, res) => {
    DB.addFriend(req.body);
    const friends = await DB.getFriends();
    res.send(friends);
  });

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.
let recipes = [];
function updateRecipes(newRecipe, recipes) {
    recipes.push(newRecipe);
    return recipes;
}

let friends = [];
function updateFriends(newFriend, friends) {
    friends.push(newFriend);
    return friends;
}