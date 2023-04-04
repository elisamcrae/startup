const {MongoClient} = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('startup').collection('user');
const recipeCollection = client.db('startup').collection('recipe');
const friendCollection = client.db('startup').collection('friend');

function getUser(email) {
    return userCollection.findOne({ email: email });
}
  
function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}
  
async function createUser(email, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
  
    return user;
}

function addRecipe(recipe) {
  recipeCollection.insertOne(recipe);
}

function addFriend(friend) {
    friendCollection.insertOne(friend);
}

function getRecipes() {
  const cursor = recipeCollection.find();
  return cursor.toArray();
}

function getFriends() {
    const cursor = friendCollection.find();
    return cursor.toArray();
}

module.exports = {addRecipe, addFriend, getRecipes, getFriends, getUser, getUserByToken, createUser};