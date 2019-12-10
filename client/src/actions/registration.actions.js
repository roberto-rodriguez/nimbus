import * as objectUtil from "../util/object.util";
import { firestore } from "./firebase.actions";
import axios from "axios";

export const listRegistrations = () => async (dispatch, getState) => {
  const response = await axios.get("/registration/list");

  var objList = objectUtil.listToObject(response.data);

  dispatch({ type: "REGISTRATION_LIST", data: objList });
};

export const saveRegistration = (registrationData, callback) => async (
  dispatch,
  getState
) => {
  const { auth } = getState();
  const { passes } = registrationData;
  const pck = registrationData.package;
  const { title, price, type } = pck;

  var registration = {
    id: new Date().getTime(),
    title,
    price,
    type,
    passes,
    price: passes * price
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
