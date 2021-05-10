var firebaseConfig = {
    apiKey: "AIzaSyD_kgApBeM0ZGOXODhcw2HIBPzgXPiENYk",
    authDomain: "altruistic-dfc0a.firebaseapp.com",
    projectId: "altruistic-dfc0a",
    storageBucket: "altruistic-dfc0a.appspot.com",
    messagingSenderId: "118733468942",
    appId: "1:118733468942:web:f397c2822395893c51535f",
    measurementId: "G-J1ZRWF1VFT"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const firestore = firebase.firestore();

const auth= firebase.auth();

function signUp(){
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
  promise.catch(e => alert(e.message));
  alert("SignUp Successful");
}

function signIn(){
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  const promise = auth.signInWithEmailAndPassword(email.value,password.value);
  promise.catch(e => alert(e.message));
}

function signOut(){
  auth.signOut();
  alert("Signout Successfull");
}

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    var email = user.email;
    alert("Active user "+email);

  }else{
    alert("No Active user Found")
  }
})