class User {
    recipes;
    //userName;
    constructor() {
        this.recipes = {name: "Mac and Cheese", image: "alt for now", recipe: "here's how to make it"};
        
        const userNameEl = document.querySelector('.user-name');
        userNameEl.textContent = this.getUserName();
        //this.userName = userNameE1;
    }

    getUserName() {
        return localStorage.getItem('userName') ?? 'Unknown';
    }
}

const user = new User();