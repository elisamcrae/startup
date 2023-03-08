function login() {
  const nameEl = document.querySelector("#username");
  localStorage.setItem("userName", nameEl.value);
  window.location.href = "recipe.html";
}

function logout() {
  localStorage.removeItem("userName");
  window.location.href = "index.html";
}
