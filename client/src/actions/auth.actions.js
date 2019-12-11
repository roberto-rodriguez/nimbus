import { firestore } from "./firebase.actions";

export const signUp = (authData, userData, callback) => async dispatch => {
  if (!authData) return;

  var user = buildUser(authData, userData);

  const userRef = firestore.doc("/users/" + authData.uid);

  //const userSnapshot = await userRef.get();

  // if (!userSnapshot.exist) {
  try {
    await userRef.set(user);
  } catch (error) {
    debugger;
  }

  callback();
};

export const logIn = (authData, userData) => async dispatch =>
  dispatch({ type: "SET_AUTH", data: buildUser(authData, userData) });

export const logOut = () => async dispatch => {
  dispatch({ type: "LOG_OUT" });
  dispatch({ type: "REGISTRATION_RESET" });
};

const buildUser = (authData, userData) => ({
  uid: authData.uid,
  firstName: userData.firstName,
  lastName: userData.lastName,
  email: authData.email || userData.email,
  phone: userData.phone || "",
  companyName: userData.companyName || "",
  photoURL: authData.photoURL,
  createdAt: new Date()
});
