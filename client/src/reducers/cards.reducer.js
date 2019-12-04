const initialState = {
  cardList: {},
  loaded: false
};

export default function cardsReducer(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case "CARD_LIST":
      return {
        ...state,
        loaded: true,
        cardList: { ...data }
      };
    case "CARD_ADD_UPDATE":
      return {
        ...state,
        cardList: {
          ...state.cardList,
          [data.PaymentDeviceOnFileID]: { ...data }
        }
      };
    case "CARD_DELETE":
      delete state.cardList[data];
      return {
        ...state,
        cardList: {
          ...state.cardList
        }
      };
    default:
      return state;
  }
}
