import { SET_PAYMENT_CARDNUMBER_FORM } from '../actions/paymentForm/paymentFormActionTypes';
import { SET_PAYMENT_EXPIREDATE_FORM } from '../actions/paymentForm/paymentFormActionTypes';
import { SET_PAYMENT_SECUTIRYCODE_FORM } from '../actions/paymentForm/paymentFormActionTypes';
import { SET_PAYMENT_CARDHOLDERNAME_FORM } from '../actions/paymentForm/paymentFormActionTypes';
import { SET_PAYMENT_IDENTIFICATIONNUMBER_FORM } from '../actions/paymentForm/paymentFormActionTypes';

const initialState = {
  cardNumber: '',
  expireDate: '',
  securityCode: '',
  cardholderName: '',
  identificationNumber: '',
};

export const paymentFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAYMENT_CARDNUMBER_FORM:
      return {
        ...state,
        cardNumber: action.payload.cardNumber,
      };
    case SET_PAYMENT_EXPIREDATE_FORM:
      return { ...state, expireDate: action.payload.expireDate };
    case SET_PAYMENT_SECUTIRYCODE_FORM:
      return { ...state, securityCode: action.payload.securityCode };
    case SET_PAYMENT_CARDHOLDERNAME_FORM:
      return { ...state, cardholderName: action.payload.cardholderName };
    case SET_PAYMENT_IDENTIFICATIONNUMBER_FORM:
      return {
        ...state,
        identificationNumber: action.payload.identificationNumber,
      };
    default:
      return state;
  }
};
