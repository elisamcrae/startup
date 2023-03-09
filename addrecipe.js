function addRecipe() {
    const recipeName = document.querySelector('#recipe_name');
    const recipeInstructions = document.querySelector('#recipe');
    let rArrays = "";
    if (localStorage.getItem("Recipes")) {
        rArrays = localStorage.getItem("Recipes");
        rArrays += recipeName.value + "," + recipeInstructions.value + ",";
        localStorage.setItem("Recipes", rArrays);
    } else {
        toStr = recipeName.value + "," + recipeInstructions.value + ","
        localStorage.setItem("Recipes", toStr)
    }
}

function addf() {
    const fName = document.querySelector('#friend_name');
        let rArrays = "";
    localStorage.setItem("Friends", fName.value);
}