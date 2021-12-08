initCreds();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
    window.location.href = "../login/login.html";
  }
  });


document.getElementById('logout').addEventListener('click', (event) => {
  event.preventDefault();
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    window.location.href = "../login/login.html";
  }).catch((error) => {
    // An error happened.
  });
});