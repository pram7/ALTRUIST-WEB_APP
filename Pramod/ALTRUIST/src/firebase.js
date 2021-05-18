import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAeO5gxKn7moSJKy_ZqNsHZYEEw9FdwHXs",
    authDomain: "altruist-643b8.firebaseapp.com",
    projectId: "altruist-643b8",
    storageBucket: "altruist-643b8.appspot.com",
    messagingSenderId: "481765529953",
    appId: "1:481765529953:web:c2af0ef0c62b167c0fcd20",
    measurementId: "G-SJ1EZKVW0M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
