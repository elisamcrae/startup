const GameEndEvent = 'gameEnd';
const GameStartEvent = 'gameStart';

class User {
    friends = ["RecipeShare"];
    socket;
    constructor() {
      this.configureWebSocket();
        this.getFriends();
        //this.printFriends();
        //this.saveFriend();
        //this.updateFriendslocal();
        this.loadFriends();
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

    addf() {
      const fName = document.querySelector('#friend_name');
      let rArrays = "";
      localStorage.setItem("Friend", fName.value);
      const friendName = fName.value;
      const userName = localStorage.getItem("userName");
      this.saveFriend({friendName, userName});
      this.updateFriendslocal({friendName, userName});
    }

    async saveFriend(friend) {
      if (localStorage.getItem("Friends").includes(friend)) {
        console.log("Friend already in list")
      }
      else {
        const recipes1 = friend;
        try {
          const response = await fetch('/api/friend', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(recipes1),
          });
    
          // Store what the service gave us as the recipes
          const recipes = await response.json();
          localStorage.setItem('Friends', recipes);
        } catch {
        // If there was an error then just track locally
        this.updateFriendsLocal(recipes1);
        }
      }
    }

    updateFriendslocal(newRecipe) {
      let recipes = [];
      const recipesText = localStorage.getItem('Friends');
      if (recipesText) {
        recipes = recipesText;
      }
      else {
          friends.push(newRecipe);
      }
      localStorage.setItem('Friends', recipes);
    }

    /*async saveFriend() {
        const recipes1 = [this.friends[this.friends.length - 1]];
        const testrun = {friend: "AlexDunphy"}
        try {
            const response = await fetch('/api/friend', {
                method: 'POST',
                //headers: { 'content-type': 'application/json' },
                body: JSON.stringify(testrun),
                //body: recipes1,
            });
    
          // Store what the service gave us as the recipes
          const recipes = await response.json();
          localStorage.setItem('Friends', recipes);
        } catch {
          // If there was an error then just track locally
          this.updateFriendsLocal(recipes1);
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
    }*/

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

    getFriends() {
        const recis = localStorage.getItem("Friend");
        if (Object.values(this.friends).includes(recis) === false && recis != null) {
            this.friends.push(recis);
        }  
    }

    async loadFriends() {
      let friends = [];
      try {
        // Get the latest recipes from the service
        const response = await fetch('/api/friends');
        friends = await response.json();
    
        // Save the scores in case we go offline in the future
        localStorage.setItem('Friends', JSON.stringify(friends));
      } catch {
        // If there was an error then just use the last saved scores
        const recipesText = localStorage.getItem('Friends');
        if (recipesText) {
          friends = JSON.parse(recipesText);
        }
      }
      this.displayFriends(friends);
    }
    
    displayFriends(friends) {
      const nameTdEl = document.querySelector('.friend-name');
      
        if (friends.length) {
          // Update the DOM with the scores
          for (const f of friends) {    
            if (f.userName === localStorage.getItem("username") && f.friendName != undefined)   {
              nameTdEl.innerText += f.friendName + "\n";
            }
          }
          if (nameTdEl.innerText === "") {
            nameTdEl.textContent = 'You have not added any friends yet';
          }
        } else {
          nameTdEl.textContent = 'You have not added any friends yet';
        }
    }
    /*displayFriends(friends) {
        const nameTdEl = document.querySelector('.friend-name');
      
        if (friends.length) {
          // Update the DOM with the scores
          for (const friend of friends) {      
            nameTdEl.textContent = friend;
          }
        } else {
          nameTdEl.textContent = 'You have not added any friends yet';
        }
    }  */
  } 

    /*async getFriends() {
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

    printFriends() {
        const match = document.querySelector('.friend-name');
        for (const item of this.friends) {
            match.innerText += item + "\n";
        }
    }
}*/

const user = new User();