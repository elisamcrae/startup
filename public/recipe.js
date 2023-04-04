const GameEndEvent = 'gameEnd';
const GameStartEvent = 'gameStart';

class User {
    recipes = [];
    friends = [];
    userName;
    counter = 0;
    socket;
    constructor() {
        const userNameEl = document.querySelector('.user-name');
        userNameEl.textContent = this.getUserName();
        this.configureWebSocket();
        //this.loadRecipes();
        /*this.getRecipe();
        if (this.recipes.length === 0) {
            console.log("this");
        }
        else {
            //this.printRecipes();
            this.loadRecipes();
        }
        this.changeR();*/
        //this.broadcastEvent(this.getUserName(), GameStartEvent);
    }

    getUserName() {
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
        const recis = localStorage.getItem("Recipes");
        if (Object.values(this.recipes).includes(recis) === false && recis != null) {
            this.recipes.push(recis);
            this.counter += 1;
        }
    }

    printRecipes() {
        const matches = document.querySelectorAll('#column1');
        const onePrint = localStorage.getItem("Recipes");
        const myA = onePrint.split(",")
        let a = 0;
        let newLength = myA.length
        let indices = []
        for (const item of myA) {
            if (item === "") {
                delete myA[a]
                newLength -= 1
            }
            else {indices.push(a) }
            ++a
        }
        let i = 0;
        matches.forEach((userItem) => {
            if (i + 1< indices.length) {
                userItem.contentEditable=true;
                userItem.innerText = myA[indices[i]] + ":\n" + myA[indices[i+1]]
                ++i;
                ++i;
            }
        });
    }

    printSuggestion() {
        const userNameEl = document.querySelector('#column1');
        const recInstr = "1. Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes.\n"
        + "2. At the same time, melt butter in a saucepan over medium heat.\n"
        + "3. Add flour, salt, and pepper and stir until smooth, about 5 minutes.\n"
        + "4. Pour in milk slowly, while stirring continuously. Continue to cook and stir until mixture is smooth and bubbling, about 5 minutes, making sure the milk doesn't burn.\n"
        + "5. Add Cheddar cheese and stir until melted, 2 to 4 minutes.\n"
        + "6. Drain macaroni and fold into cheese sauce until coated.\n"
        userNameEl.innerText = "No recipes found. Suggested Recipe:\n"
        userNameEl.innerText += "Mac and Cheese:\r\n" + recInstr;
    }

    async saveRecipe(recipe) {
        try {
            const response = await fetch('/api/recipe', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(recipe),
            });

            this.broadcastEvent(userName, "added a new recipe!");
    
          // Store what the service gave us as the recipes
          const recipes = await response.json();
          localStorage.setItem('Recipes', JSON.stringify(recipes));
        } catch {
          // If there was an error then just track locally
          this.updateRecipesLocal(newRecipe);
        }
    }
    
    updateRecipeslocal(newRecipe) {
        let recipes = [];
        const recipesText = localStorage.getItem('Recipes');
        if (recipesText) {
          recipes = JSON.parse(recipesText);
        }
        recipes.push(newRecipe);
        localStorage.setItem('Recipes', JSON.stringify(recipes));
    }

    async loadRecipes() {
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
      
        this.displayRecipes(recipes);
      }
      
      displayRecipes(recipes) {
        const tableBodyEl = document.querySelector('#recipes');
      
        if (recipes.length) {
            const matches = document.querySelectorAll('#column1');
            //const scoreTdEl = document.createElement('td');
            //const rowEl = document.createElement('tr');
            
          // Update the DOM with the scores
          //for (const recipe of recipes) {
            //let myA = recipe; //modifyable list
            let i = 0;
            matches.forEach((userItem) => {
                if (i < recipes.length) {
                    let myA = recipes[i];
                    let myA0 = myA.recipeN;
                    myA0 = myA0.substring(myA0.indexOf(":"))
                    let myA1 = myA.recipeI;
                    myA1 = myA1.substring(myA1.indexOf(":"))
                    //userItem.contentEditable = true;
                    userItem.textContent = myA0 + ":\n" + myA1
                }
            //rowEl.appendChild(scoreTdEl);
            //tableBodyEl.appendChild(rowEl);
                ++i;
            }) 
        } else {
          tableBodyEl.innerHTML = '<tr><td colSpan=4>No Recipes</td></tr>';
        }
      }

      async saveFriend(recipe) {
        const recipes1 = {recipe};
        recipe.loadRecipes();
        try {
            const response = await fetch('/api/friend', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(recipes1),
                //body: recipe,
            });

            this.broadcastEvent(userName, "added a new friend!");
    
          // Store what the service gave us as the recipes
          const recipes = await response.json();
          localStorage.setItem('Recipes', recipes);
        } catch {
          // If there was an error then just track locally
          this.updateFriendsLocal(recipe);
        }
    }
    
    updateFriendslocal(newRecipe) {
        let recipes = [];
        const recipesText = localStorage.getItem('Friends');
        if (recipesText) {
          recipes = recipesText;
        }
        else {
            recipes.push(newRecipe);
        }
        localStorage.setItem('Friends', recipes);
    }

    displayFriends(friends) {
        const nameTdEl = document.querySelector('.friend-name');
      
        if (friends.length) {
          // Update the DOM with the scores
          for (const friend of friends) {      
            nameTdEl.textContent = friend;
          }
        } else if (nameTdEl != null) {
          nameTdEl.textContent = 'You have not added any friends yet';
        }
    }   

    async getFriends() {
        let friends = [];
        try {
            // Get the latest high scores from the service
            const response = await fetch('/api/friends');
            friends = await response.json();

            // Save the scores in case we go offline in the future
            localStorage.setItem('friends', JSON.stringify(friends));
        } catch {
            // If there was an error then just use the last saved scores
            const friendsText = localStorage.getItem('friends');
            if (friendsText) {
            friends = JSON.parse(friendsText);
            }
        }

        this.displayFriends(friends);
    }
      
    changeR() {
        const editables = document.querySelectorAll("[contenteditable]");
        editables.forEach(el => {
            const myEl = el.innerHTML;
            el.addEventListener("blur", () => {
                if (el.innerHTML === "" || el.innerHTML === "<br>") {
                    el.style.visibility = "hidden";
                }
                localStorage.setItem("dataStorage-" + el.id, el.innerHTML);
            })
          });
          
          // once on load
        for (var key in localStorage) {
        if (key.includes("dataStorage-")) {
            const id = key.replace("dataStorage-","");
            document.querySelector("#" + id).innerHTML = localStorage.getItem(key);
            if (document.querySelector("#" + id).innerHTML === "") {
                document.querySelector("#" + id).style.visibility = "hidden";
            }
            else {
                //update fixed storage
                let myName = localStorage.getItem(key);
                myName = myName.substring(0, myName.indexOf(":"))
                let myRecipe = localStorage.getItem(key);
                myRecipe = myRecipe.substring(myRecipe.indexOf(":")+1)
                const newRecipe = {recipeN: myName, recipeI: myRecipe}
                this.saveRecipe(newRecipe);
                //let recipes = [];
                //const recipesText = localStorage.getItem('Recipes');
                //if (recipesText) {
                //    recipes = JSON.parse(recipesText);
                //}
                //recipes.push(newRecipe);
                //localStorage.setItem('Recipes', JSON.stringify(recipes));
            }
           }
        }
    } 
    
    configureWebSocket() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        this.socket.onopen = (event) => {
          this.displayMsg('system', 'RecipeShare', 'connected');
        };
        this.socket.onclose = (event) => {
          this.displayMsg('system', 'RecipeShare', 'disconnected');
        };
        this.socket.onmessage = async (event) => {
          const msg = JSON.parse(await event.data.text());
          if (msg.type === GameEndEvent || msg.type === GameStartEvent) {
            this.displayMsg('user', msg.from, `logged in`);
        };
    }
    }
    
    displayMsg(cls, from, msg) {
        const chatText = document.querySelector('#player-messages');
        chatText.innerHTML =
          `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
    }
    
    broadcastEvent(from, type) {
        const event = {
          from: from,
          type: type,
        };
        this.socket.send(JSON.stringify(event));
    }
}    

const user = new User();
