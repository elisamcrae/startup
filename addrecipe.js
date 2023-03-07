function addRecipe() {
    const recipeName = document.querySelector('#recipe_name');
    const recipeInstructions = document.querySelector('#recipe');
    let rArrays = "";
    if (localStorage.getItem("Recipes")) {
        rArrays = localStorage.getItem("Recipes");
        rArrays += recipeName.value + "," + recipeInstructions.value + ",";
        localStorage.setItem("Recipes", rArrays);
        //rArray.push(JSON.parse(rArrays));
        //console.log(rArray.length);
        //console.log(rArray);
        //rArray.push({"name": recipeName.value, "instructions": recipeInstructions.value});
        //const newA = {"name": recipeName.value, "instructions": recipeInstructions.value};
       // const joinedA = Object.assign(newA, rArray);
        //localStorage.setItem("Recipes", JSON.stringify(joinedA));
    } else {
        //rArrays = {name: recipeName.value, instructions: recipeInstructions.value};
        //localStorage.setItem("Recipes", JSON.stringify(rArray));
        toStr = recipeName.value + "," + recipeInstructions.value + ","
        localStorage.setItem("Recipes", toStr)
    }
    //localStorage.setItem("RecipeName", recipeName.value);
    //localStorage.setItem("Recipe", recipeInstructions.value);
    //this.recipes = Object.assign({3: {name: recipeName, image: "", recipe: recipeInstructions}}, this.recipes);
    //window.location.replace("recipe.html");
}