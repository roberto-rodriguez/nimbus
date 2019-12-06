import * as objectUtil from "../util/object.util";
import axios from "axios";

export const listRegistrations = () => async (dispatch, getState) => {
  const response = await axios.get("/registration/list");

  var objList = objectUtil.listToObject(response.data);

  dispatch({ type: "REGISTRATION_LIST", data: objList });
};

export const saveRegistration = (registration, callback) => async dispatch => {
  var data = {
    userId: 1,
    registrationId: 1,
    firstName: registration.firstName,
    lastName: registration.lastName
  };
  dispatch({ type: "USER_SET", data });

  callback();
};
