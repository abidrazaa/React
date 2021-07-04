import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAhP4uc9sEU9FxeoloZSeuzYbvbrlq16BY",
    authDomain: "fb-posts-cc60a.firebaseapp.com",
    projectId: "fb-posts-cc60a",
    storageBucket: "fb-posts-cc60a.appspot.com",
    messagingSenderId: "620561789612",
    appId: "1:620561789612:web:835546713a3196a21ca509",
    measurementId: "G-FC28011ZL6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()



// function register(email,password,fullName) {
//      //async vs sync
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in 
//         var user = userCredential.user;
//         console.log('user ===>', user)
//         alert('User Registered Successfully!')
  
//         db.collection('users').add({ email, fullName })
//         .then(res => {
//           console.log('res ===>', res)
//         }).catch(e => {
//           console.log('error in user db', e.message)
//         })
//         // ...
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         alert(errorMessage)
//         // ..
//       });
  
//       //1,3,4 (2) //wo bewakuf noker hai jo chae banne ka intezar karega
//       //1,4,3 (19) //wo intelligent noker hai jo chae banne ka intezar nahi karega aur agla kaam karlega
//   }

  function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  function register(email,password){
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  function getAllUsers () {
    return db.collection("users").get()
  }


export {register , login , getAllUsers}