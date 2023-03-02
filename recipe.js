class User {
    recipes;
    userName;
    constructor() {
        const userNameEl = document.querySelector('.user-name');
        userNameEl.textContent = this.getUserName();
        this.getRecipe();
    }

    getUserName() {
        //console.log(recipes.length);//TODELETE
        this.userName = localStorage.getItem('userName')
        if (this.userName) {
            return localStorage.getItem('userName') ?? 'Unknown';
        }
        else {
            this.userName = "Unknown";
            return "Unknown"
        }
    }

    getRecipe() {
        let recipeName = localStorage.getItem('RecipeName');
        let recipeInstructions = localStorage.getItem('Recipe');
        if (recipeName && recipeInstructions) {
            this.recipes.push([recipeName, recipeInstructions]);
        }
        console.log(recipes.length);//TODELETE
        //this.recipes = Object.assign({3: {name: recipeName, recipe: recipeInstructions}}, this.recipes);
    }
}

/*class Recipes extends User() {
    recip
}*/

const user = new User();