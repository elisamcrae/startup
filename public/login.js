/*function login() {
  const nameEl = document.querySelector("#username");
  localStorage.setItem("userName", nameEl.value);
  window.location.href = "recipe.html";
}

function logout() {
  localStorage.removeItem("userName");
  window.location.href = "index.html";
}*/

(async () => {
  let authenticated = false;
  const userName = localStorage.getItem('userName');
  if (userName != null) {
    const nameEl = document.querySelector('#username');
    nameEl.value = userName;
    const user = await getUser(nameEl.value);
    authenticated = user?.authenticated;
  }

  if (authenticated) {
    //document.querySelector('#playerName').textContent = userName;
    setDisplay('loginControls', 'none');
    setDisplay('playControls', 'block');
  } else {
    setDisplay('loginControls', 'block');
    setDisplay('playControls', 'none');
  }
})();

async function login() {
  const nameEl = document.querySelector("#username");
  localStorage.setItem("username", nameEl.value);
  loginOrCreate(`/api/auth/login`);
}

async function createUser() {
  loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
  const userName = document.querySelector('#username')?.value;
  const password = document.querySelector('#userPassword')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ email: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const body = await response.json();

  if (response?.status === 200) {
    localStorage.setItem('userName', userName);
    window.location.href = 'recipe.html';
  } else {
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

async function getUser(email) {
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${email}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}

function play() {
  window.location.href = 'recipe.html';
}

function setDisplay(controlId, display) {
  const playControlEl = document.querySelector(`#${controlId}`);
  if (playControlEl) {
    playControlEl.style.display = display;
  }
}