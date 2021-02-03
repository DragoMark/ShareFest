import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyAjGNClZNVrkOXapG0jyEqAiEkWV7kt0jY",
//     authDomain: "share-fest.firebaseapp.com",
//     projectId: "share-fest",
//     storageBucket: "share-fest.appspot.com",
//     messagingSenderId: "295606347116",
//     appId: "1:295606347116:web:48204368cc4747866aff49",
//     measurementId: "G-QR5P8EFNZ2"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjGNClZNVrkOXapG0jyEqAiEkWV7kt0jY",
    authDomain: "share-fest.firebaseapp.com",
    databaseURL: "https://share-fest-default-rtdb.firebaseio.com",
    projectId: "share-fest",
    storageBucket: "share-fest.appspot.com",
    messagingSenderId: "295606347116",
    appId: "1:295606347116:web:48204368cc4747866aff49",
    measurementId: "G-QR5P8EFNZ2"
};

const db = firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider();
// const db = firebaseApp.firestore();
// const db = firebaseApp.database();
// export { auth, provider }
export default db