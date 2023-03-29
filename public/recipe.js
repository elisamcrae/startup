class User {
    recipes = [];
    userName;
    counter = 0;
    constructor() {
        const userNameEl = document.querySelector('.user-name');
        userNameEl.textContent = this.getUserName();
        this.getRecipe();
        if (this.recipes.length === 0) {
            console.log("this");
        }
        else {
            this.printRecipes();
        }
        this.changeR();
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
           }
        }
    }    
}    

const user = new User();
