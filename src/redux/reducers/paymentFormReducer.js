import { SET_PAYMENT_CARDNUMBER_FORM } from '../actions/paymentForm/paymentFormActionTypes';
import { SET_PAYMENT_EXPIREDATE_FORM } from '../actions/paymentForm/paymentFormActionTypes';
import { SET_PAYMENT_SECUTIRYCODE_FORM } from '../actions/paymentForm/paymentFormActionTypes';
import { SET_PAYMENT_CARDHOLDERNAME_FORM } from '../actions/paymentForm/paymentFormActionTypes';
import { SET_PAYMENT_IDENTIFICATIONNUMBER_FORM } from '../actions/paymentForm/paymentFormActionTypes';
import { SET_PAYMENT_TOKEN_FORM } from '../actions/paymentForm/paymentFormActionTypes';
import { SET_PAYMENT_CARDFLAG_FORM } from '../actions/paymentForm/paymentFormActionTypes';
import { SET_CLEAR_FORM } from '../actions/paymentForm/paymentFormActionTypes';

const initialState = {
  cardNumber: '4235 6477 2802 5682',
  expireDate: '11/2025',
  securityCode: '123',
  cardholderName: 'Cardholder Name',
  identificationNumber: '835.359.240-14',
  token: '',
  cardFlag: '',
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
    case SET_PAYMENT_TOKEN_FORM:
      return { ...state, token: action.payload.token };
    case SET_PAYMENT_CARDFLAG_FORM:
      return { ...state, cardFlag: action.payload.cardFlag };
    case SET_CLEAR_FORM:
      return {
        cardNumber: '',
        expireDate: '',
        securityCode: '',
        cardholderName: '',
        identificationNumber: '',
        token: '',
        cardFlag: '',
      };
    default:
      return state;
  }
};
