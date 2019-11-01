import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDQ7XV4folarkSlNy6LOhArxnQRqhoPRaE",
    authDomain: "firstfirebase-19ca4.firebaseapp.com",
    databaseURL: "https://firstfirebase-19ca4.firebaseio.com",
    projectId: "firstfirebase-19ca4",
    storageBucket: "mila-storage.appspot.com",
    messagingSenderId: "536577724256",
}

const fire = firebase.initializeApp(config);
const storage = firebase.storage();

export {
    storage, fire as default
}