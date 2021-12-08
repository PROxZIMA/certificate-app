function initCreds() {
  const firebaseConfig = {
    apiKey: "AIzaSyArDiUmTef0GM_6ZD9L42-GDEaHmThzWWA",
    authDomain: "certificate-app-1c936.firebaseapp.com",
    projectId: "certificate-app-1c936",
    storageBucket: "certificate-app-1c936.appspot.com",
    messagingSenderId: "184550484990",
    appId: "1:184550484990:web:4df60e85b6fa15c7a6eeaf",
    measurementId: "${config.measurementId}"
  };

  firebase.initializeApp(firebaseConfig);
};