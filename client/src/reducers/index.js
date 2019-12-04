import { combineReducers } from "redux";
import cardsReducer from "./cards.reducer";

const rootReducer = combineReducers({
  cards: cardsReducer
});

export default rootReducer;
