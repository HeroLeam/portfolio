// Inicialize o Firebase Realtime Database
const firebaseConfig = {
    apiKey: "AIzaSyBXX9Vy41FlX1XZRPV3fGdZHcTUBvWC0Es",
    authDomain: "portfolio-heroleam.firebaseapp.com",
    projectId: "portfolio-heroleam",
    storageBucket: "portfolio-heroleam.appspot.com",
    messagingSenderId: "76222048664",
    appId: "1:76222048664:web:179d3c87f812f3a179e3ed",
    databaseURL: "https://portfolio-heroleam-default-rtdb.firebaseio.com/"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Referência ao contador no Firebase
const counterRef = firebase.database().ref('visitas');

// Incrementa o contador de visitas
counterRef.transaction(function (currentCount) {
    return (currentCount || 0) + 1;
});

// Exibe o contador de visitas no HTML
counterRef.on('value', function (snapshot) {
    const counterElement = document.getElementById('counter');
    counterElement.innerText = snapshot.val();
});