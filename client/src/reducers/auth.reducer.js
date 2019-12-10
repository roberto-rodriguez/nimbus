const initialState = {
  // userId: 1,
  // firstName: "Roberto",
  // lastName: "Rodriguez"
};

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
      return {};
    default:
      return state;
  }
}
