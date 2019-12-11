import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import registrationReducer from "./registration.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  registrations: registrationReducer
});

export default rootReducer;
