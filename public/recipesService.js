async function loadRecipes() {
    let recipes = [];
    try {
      // Get the latest recipes from the service
      const response = await fetch('/api/recipes');
      recipes = await response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('Recipes', JSON.stringify(recipes));
    } catch {
      // If there was an error then just use the last saved scores
      const recipesText = localStorage.getItem('Recipes');
      if (recipesText) {
        recipes = JSON.parse(recipesText);
      }
    }
  
    displayRecipes(recipes);
  }
  
  function displayRecipes(recipes) {
    const tableBodyEl = document.querySelector('#recipes');
  
    if (recipes.length) {
        const matches = document.querySelectorAll('#column1');
        const scoreTdEl = document.createElement('td');
        const rowEl = document.createElement('tr');
        
      // Update the DOM with the scores
      for (const recipe of recipes) {
        let myA = recipe; //modifyable list
        matches.forEach((userItem) => {
            //myA[0] = myA[0].replace("\"", "");
            //myA[0] = myA[0].replace("{","");
            //myA[0] = myA[0].replace("}","");
            //myA[1] = myA[1].replace("\"", "");
            //myA[1] = myA[1].replace("{","");
            //myA[1] = myA[1].replace("}","");
            let myA0 = myA.recipeN;
            myA0 = myA0.substring(myA0.indexOf(":"))
            let myA1 = myA.recipeI;
            myA1 = myA1.substring(myA1.indexOf(":"))
            scoreTdEl.textContent = myA0 + ":\n" + myA1
        });
        rowEl.appendChild(scoreTdEl);
        tableBodyEl.appendChild(rowEl);
        }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>No Recipes</td></tr>';
    }
  }
  
  loadRecipes();