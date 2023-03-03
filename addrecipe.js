function addRecipe() {
    const recipeName = document.querySelector('#recipe_name');
    const recipeInstructions = document.querySelector('#recipe');
    let rArray = [];
    if (localStorage.getItem("Recipes")) {
        rArrays = localStorage.getItem("Recipes");
        rArray.push(JSON.parse(rArrays));
        rArray.push({"name": recipeName.value, "instructions": recipeInstructions.value});
        //const newA = {"name": recipeName.value, "instructions": recipeInstructions.value};
       // const joinedA = Object.assign(newA, rArray);
        //localStorage.setItem("Recipes", JSON.stringify(joinedA));
    } else {
        rArray = {name: recipeName.value, instructions: recipeInstructions.value};
    }
    localStorage.setItem("Recipes", JSON.stringify(rArray));
    //localStorage.setItem("RecipeName", recipeName.value);
    //localStorage.setItem("Recipe", recipeInstructions.value);
    //this.recipes = Object.assign({3: {name: recipeName, image: "", recipe: recipeInstructions}}, this.recipes);
    //window.location.replace("recipe.html");
}