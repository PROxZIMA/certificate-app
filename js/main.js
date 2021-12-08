initCreds();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location.href = 'app/app.html';
  } else {
    window.location.href = 'login/login.html';
  }
});
