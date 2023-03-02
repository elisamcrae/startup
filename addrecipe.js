function addRecipe() {
    const recipeName = document.querySelector('#recipe_name');
    const recipeInstructions = document.querySelector('#recipe');
    localStorage.setItem("RecipeName", recipeName.value);
    localStorage.setItem("Recipe", recipeInstructions.value);
    //this.recipes = Object.assign({3: {name: recipeName, image: "", recipe: recipeInstructions}}, this.recipes);
    window.location.replace("recipe.html");
}