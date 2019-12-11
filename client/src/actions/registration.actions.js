import * as objectUtil from "../util/object.util";
import { firestore } from "./firebase.actions";
import axios from "axios";

export const listRegistrations = () => async (dispatch, getState) => {
  var { auth, registrations } = getState();

  if (!registrations.loaded) {
    var snapshot = await firestore
      .collection("/users/" + auth.uid + "/registrations")
      .get();

    var data = {};

    snapshot.docs.map(doc => {
      var reg = doc.data();

      data[reg.id] = { ...reg };
    });

    dispatch({ type: "REGISTRATION_LIST", data });
  }
};

export const saveRegistration = (registrationData, callback) => async (
  dispatch,
  getState
) => {
  const { auth } = getState();
  const { passes } = registrationData;
  const pck = registrationData.package;
  const { title, price, type } = pck;

  var dateTime = new Date().getTime();

  var registration = {
    id: dateTime,
    dateTime,
    title,
    price,
    type,
    passes,
    amount: passes * price
  };

  try {
    var registrationRef = firestore.doc(
      "/users/" + auth.uid + "/registrations/" + registration.id
    );

    await registrationRef.set(registration);

    dispatch({ type: "REGISTRATION_ADD", data: registration });

    callback();
  } catch (error) {
    callback(1, "Error persisting registration");
  }
};
