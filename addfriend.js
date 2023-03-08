class User {
    friends = ["RecipeShare"];
    constructor() {
        this.getFriends();
        this.printFriends();
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

    getFriends() {
        const recis = localStorage.getItem("Friends");
        if (Object.values(this.friends).includes(recis) === false && recis != 'null') {
            this.friends.push(recis);
        }  
    
    }

    printFriends() {
        const match = document.querySelector('.friend-name');
        for (const item of this.friends) {
            match.innerText += item + "\n";
        }
    }
}

const user = new User();