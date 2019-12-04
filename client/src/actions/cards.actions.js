import * as objectUtil from "../util/object.util";
import axios from "axios";

export const listCards = () => async (dispatch, getState) => {
  const response = await axios.get("/card/list");

  var objList = objectUtil.listToObject(response.data, "PaymentDeviceOnFileID");

  dispatch({ type: "CARD_LIST", data: objList });
};

export const saveCard = (card, callback) => async (dispatch, getState) => {
  var SelectedPaymentDeviceChargeTypeCD;

  switch (card.PDAccountTypeName) {
    case "Visa":
      SelectedPaymentDeviceChargeTypeCD = 4;
      break;
    default:
      SelectedPaymentDeviceChargeTypeCD = 5;
  }

  var newCard = {
    ...card,
    PDCountryCode: card.PDCountryCode || "IE",
    SelectedPaymentDeviceChargeTypeCD,
    PDAccountNumberLast4: card.ChargeAccountNumber.substring(12)
  };

  const response = await axios.post("/card/create", newCard);

  const {
    ResponseCode,
    OrderStatusCD,
    PaymentDeviceOnFileID,
    ResponseText
  } = response.data;

  if (ResponseCode == 0) {
    if (!card.PaymentDeviceOnFileID) {
      newCard.PaymentDeviceOnFileID = PaymentDeviceOnFileID;
    }

    if (card.PDAccountNumber) {
      newCard.PDAccountNumberLast4 = card.PDAccountNumber.substring(
        card.PDAccountNumber.length - 4
      );
    }

    dispatch({ type: "CARD_ADD_UPDATE", data: newCard });
  }

  callback(ResponseCode, ResponseText);
};

export const deleteCard = (id, callback) => async dispatch => {
    const response = await axios.get("/card/remove/" + id);

    dispatch({ type: "CARD_DELETE", data: id });

    callback();
  } 
