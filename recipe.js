class User {
    constructor() {
        recipes = [];
        
        userNameEl = document.querySelector('.user-name');
        userNameEl.textContent = this.getUserName();
    }

    getUserName() {
        return localStorage.getItem('userName') ?? 'Unknown';
    }
}



const user = new User();