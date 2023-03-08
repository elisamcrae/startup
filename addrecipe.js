function addRecipe() {
    const recipeName = document.querySelector('#recipe_name');
    const recipeInstructions = document.querySelector('#recipe');
    let rArrays = "";
    if (localStorage.getItem("Recipes")) {
        rArrays = localStorage.getItem("Recipes");
        rArrays += recipeName.value + "," + recipeInstructions.value + ",";
        localStorage.setItem("Recipes", rArrays);
    } else {
        //rArrays = {name: recipeName.value, instructions: recipeInstructions.value};
        //localStorage.setItem("Recipes", JSON.stringify(rArray));
        toStr = recipeName.value + "," + recipeInstructions.value + ","
        localStorage.setItem("Recipes", toStr)
    }
}

function addf() {
    const fName = document.querySelector('#friend_name');
        let rArrays = "";
        /*if (localStorage.getItem("Friends")) {
            rArrays = localStorage.getItem("Friends");
            rArrays += fName.value + ",";
            localStorage.setItem("Friends", rArrays);
        } else {
            toStr = fName.value + ","
            localStorage.setItem("Friends", toStr)
        }*/
    localStorage.setItem("Friends", fName.value);
}