function login() {
  const nameEl = document.querySelector("#username");
  localStorage.setItem("userName", nameEl.value);
  window.location.href = "recipe.html";
}

function logout() {
  localStorage.removeItem("userName");
  window.location.href = "index.html";
}

function addf() {
  const fName = document.querySelector('#friend_name');
  let rArrays = "";
  localStorage.setItem("Friend", fName.value);
  saveFriend(fName.value);
  updateFriendslocal(fName.value);
}

async function saveFriend(friend) {
  if (localStorage.getItem("Friends").includes(friend)) {
    console.log("Friend already in list")
  }
  else {
    const recipes1 = {friend};
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

function updateFriendslocal(newRecipe) {
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