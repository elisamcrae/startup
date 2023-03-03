class User {
    recipes = [];
    userName;
    constructor() {
        const userNameEl = document.querySelector('.user-name');
        userNameEl.textContent = this.getUserName();
        this.getRecipe();
        if (this.recipes.length === 0) {
            this.printSuggestion();
        }
        else {
            this.printRecipes();
        }
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
        //const recis = JSON.parse(localStorage.getItem("Recipes"));
        const recis = localStorage.getItem("Recipes");
        //if (this.recipes.includes(recis)) {
        if (Object.values(this.recipes).includes(recis) === false) {
            this.recipes.push(recis);
        }
        //const recis = JSON.parse(reci);
        //console.log(recis);
        //for (const ar of recis) {
            //console.log(ar);//TO DELETE
            //if (this.recipes.includes(ar)) {continue;}
            //else {this.recipes.push(ar);}
       // }
        //const keys = Object.keys(localStorage);
        //console.log(keys);//TO DELETE
        //let recipeName = '';
        //let recipeInstructions = '';
        //for (const item of keys) {
          //  if (item === "RecipeName") {
            //    recipeName = localStorage.getItem(item);
                //let recipeInstructions = localStorage.getItem();
            //}
            //else if (item === "Recipe") {
              //  recipeInstructions = localStorage.getItem(item);
            //}
            //if (recipeName != "" && recipeInstructions != "") {
                //console.log(this.recipes.includes([recipeName, recipeInstructions]));//TO DELETE
              //  if (this.recipes.includes([recipeName, recipeInstructions])) {
                //    continue;
                //} else {
                  //  this.recipes.push([recipeName, recipeInstructions]);
                    //recipeName = '';
                    //recipeInstructions = '';
                    //localStorage.removeItem(item);
                //}
           // }
        //}
        //this.recipes = Object.assign({3: {name: recipeName, recipe: recipeInstructions}}, this.recipes);
    }

    printRecipes() {
        const userNameE1 = document.querySelector('.recipes');
        let toPrint = "";
        let onePrint = "";
        //const toPrint = this.recipes;
        for (const [key, value] of Object.entries(this.recipes)) {
            for (const i of value) {
                if (i != "[" || i != "]" || i != "{" || i != "}") {
                    onePrint += i;
                }
            }
        }
        onePrint.replace("[", "");
        onePrint.replace("]", "");
        onePrint.replace("{", "");
        onePrint.replace("}", "");
        let myArs = onePrint.split(",");
        let myAr = myArs
        for (const i of myAr) {
            let k = i.substring(i.indexOf(":") + 1);
            k= k.replace("]", "");
            k= k.replace("}", "");
            k=k.replace('\"', '');
            k=k.replace('\"', '');
            userNameE1.textContent += k + " ";
        }
        //userNameEl.textContent = toPrint;
    }

    printSuggestion() {
        const userNameEl = document.querySelector('.recipes');
        const recInstr = "1. Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes.\n"
        + "2. At the same time, melt butter in a saucepan over medium heat.\n"
        + "3. Add flour, salt, and pepper and stir until smooth, about 5 minutes.\n"
        + "4. Pour in milk slowly, while stirring continuously. Continue to cook and stir until mixture is smooth and bubbling, about 5 minutes, making sure the milk doesn't burn.\n"
        + "5. Add Cheddar cheese and stir until melted, 2 to 4 minutes.\n"
        + "6. Drain macaroni and fold into cheese sauce until coated.\n"
        userNameEl.textContent = ["Mac and Cheese", recInstr];
    }
}

/*class Recipes extends User() {
    recip
}*/

const user = new User();
