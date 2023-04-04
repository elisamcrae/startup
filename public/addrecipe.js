function addRecipe() {
    const recipeName = document.querySelector('#recipe_name');
    const recipeInstructions = document.querySelector('#rButton1');
    /*let rArrays = "";
    if (localStorage.getItem("Recipes")) {
        rArrays = localStorage.getItem("Recipes");
        rArrays += recipeName.value + "," + recipeInstructions.value + ",";
        //localStorage.setItem("Recipes", rArrays);
    } else {
        toStr = recipeName.value + "," + recipeInstructions.value + ","
        localStorage.setItem("Recipes", toStr)
    }*/
    recipeN = recipeName.value
    recipeI = recipeInstructions.value
    userName = localStorage.getItem("username")
    saveRecipe({recipeN, recipeI, userName});
    updateRecipeslocal({recipeN, recipeI, userName});
}

async function saveRecipe(recipe) {
    try {
        const response = await fetch('/api/recipe', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(recipe),
        });

      // Store what the service gave us as the recipes
      const recipes = await response.json();
      localStorage.setItem('Recipes', JSON.stringify(recipes));
    } catch {
      // If there was an error then just track locally
      this.updateRecipesLocal(recipe);
    }
}

function updateRecipeslocal(newRecipe) {
    let recipes = [];
    const recipesText = localStorage.getItem('Recipes');
    if (recipesText) {
      recipes = JSON.parse(recipesText);
    }
    recipes.push(newRecipe);
    localStorage.setItem('Recipes', JSON.stringify(recipes));
}

