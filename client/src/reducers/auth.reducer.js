const initialState = {
  // userId: 1,
  // firstName: "Roberto",
  // lastName: "Rodriguez"
};

export default function authReducer(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case "USER_SET":
      return {
        ...state,
        ...data
      };
    default:
      return state;
  }
}
