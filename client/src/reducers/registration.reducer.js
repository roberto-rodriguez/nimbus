const initialState = {
  list: {},
  loaded: false
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
    case "REGISTRATION_LIST":
      return {
        ...state,
        loaded: true,
        list: data
      };
    case "REGISTRATION_RESET":
      return {
        loaded: false
      };
    default:
      return state;
  }
}
