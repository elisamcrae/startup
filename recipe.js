class User {
    recipes;
    userName;
    constructor() {
        this.recipes = {
            1: {name: "Mac and Cheese", recipe: "here's how to make it"}
        }
        const userNameEl = document.querySelector('.user-name');
        userNameEl.textContent = this.getUserName();
    }

    getUserName() {
        this.userName = localStorage.getItem('userName')
        if (this.userName) {
            return localStorage.getItem('userName') ?? 'Unknown';
        }
        else {
            return "Unknown"
        }
    }
}

function addRecipe() {
    const recipeName = document.querySelector('.recipe_name');
    const recipeInstructions = document.querySelector('.recipe');
    this.recipes = Object.assign({3: {name: recipeName, recipe: recipeInstructions}}, this.recipes);
    window.location.href = "recipe.html";
}

const user = new User();