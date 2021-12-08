initCreds();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      window.location.href = "../app/app.html";
  } else {
    // No user is signed in.
  }
  });

document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  var email = document.getElementById('email')
  var password = document.getElementById('password')
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorMessage.includes('password')) {
      password.style.outline = "1px solid red";
      email.style.outline = "none";
    }
    else {
      password.style.outline = "none";
      email.style.outline = "1px solid red";
    }
  });
});