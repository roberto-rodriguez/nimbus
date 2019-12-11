const initialState = {};

export default function authReducer(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        ...data,
        authLoaded: true
      };
    case "LOG_OUT":
      return { authLoaded: true };
    default:
      return state;
  }
}
