const initialState = {
  list: {}
};

export default function registrationReducer(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case "REGISTRATION_ADD":
      return {
        ...state,
        list: {
          ...state.list,
          [data.id]: { ...data }
        }
      };
    default:
      return state;
  }
}
