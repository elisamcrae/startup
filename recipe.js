class User {
    recipes;
    //userName;
    constructor() {
        console.log('line 1');
        this.recipes = {
            1: {name: "Mac and Cheese", image: "alt for now", recipe: "here's how to make it"}
        }
        console.log('line2');
        const userNameEl = document.querySelector('.user-name');
        console.log('line3')
        userNameEl.textContent = this.getUserName();
        console.log('line4');
        //this.userName = userNameE1;
    }

    getUserName() {
        console.log('line 5')
        console.log(localStorage.getItem('userName'));
        return localStorage.getItem('userName') ?? 'Unknown';
    }
}

function addRecipe() {
    const recipeName = document.querySelector('.recipe_name');
    const recipeInstructions = document.querySelector('.recipe');
    this.recipes = Object.assign({3: {name: recipeName, image: "", recipe: recipeInstructions}}, this.recipes);
    window.location.href = "recipe.html";
}

const user = new User();