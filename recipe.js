class User {
    recipes;
    userName;
    constructor() {
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

    addRecipe() {
        const recipeName = document.querySelector('.recipe_name');
        const recipeInstructions = document.querySelector('.recipe');
        this.recipes = Object.assign({3: {name: recipeName, recipe: recipeInstructions}}, this.recipes);
    }
}

class Recipes extends User() {
    
}

const user = new User();