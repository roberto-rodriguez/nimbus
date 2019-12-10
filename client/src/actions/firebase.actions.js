import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBoKUWrQo8kR7FsG5OBve3ct4Glvc1lktg",
  authDomain: "nimbus-2cba8.firebaseapp.com",
  databaseURL: "https://nimbus-2cba8.firebaseio.com",
  projectId: "nimbus-2cba8",
  storageBucket: "nimbus-2cba8.appspot.com",
  messagingSenderId: "95580571913",
  appId: "1:95580571913:web:4f870ee932e7e5ce426bd8",
  measurementId: "G-EMGMJVEFQN"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

// export const createUserProfileDocument = async (authData, userData) => {
//   if (!authData) return;
//   const userRef = firestore.doc("/users/" + authData.uid);

//   const userSnapshot = await userRef.get();

//   if (!userSnapshot.exist) {
//     try {
//       await userRef.set({
//         firstName: userData.firstName,
//         lastName: userData.lastName,
//         email: authData.email || userData.email,
//         phone: userData.phone || "",
//         companyName: userData.companyName || "",
//         photoURL: authData.photoURL,
//         createdAt: new Date()
//       });
//     } catch (error) {
//       debugger;
//     }
//   }

//   return userRef;
// };
