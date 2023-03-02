function addRecipe() {
    const recipeName = document.querySelector('#recipe_name');
    const recipeInstructions = document.querySelector('#recipe');
    localStorage.setItem("RecipeName", recipeName);
    localStorage.setItem("Recipe", recipeInstructions);
    console.log("A");
    //this.recipes = Object.assign({3: {name: recipeName, image: "", recipe: recipeInstructions}}, this.recipes);
    window.location.replace("recipe.html");
    console.log("B");
}