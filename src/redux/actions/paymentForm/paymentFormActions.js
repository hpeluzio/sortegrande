import { SET_PAYMENT_CARDNUMBER_FORM } from './paymentFormActionTypes';
import { SET_PAYMENT_EXPIREDATE_FORM } from './paymentFormActionTypes';
import { SET_PAYMENT_SECUTIRYCODE_FORM } from './paymentFormActionTypes';
import { SET_PAYMENT_CARDHOLDERNAME_FORM } from './paymentFormActionTypes';
import { SET_PAYMENT_IDENTIFICATIONNUMBER_FORM } from './paymentFormActionTypes';

export const setPaymentCardNumberForm = cardNumber => ({
  type: SET_PAYMENT_CARDNUMBER_FORM,
  payload: cardNumber,
});

export const setPaymentExpireDateForm = expireDate => ({
  type: SET_PAYMENT_EXPIREDATE_FORM,
  payload: expireDate,
});

export const setPaymentSecurityCodeForm = ({ securityCode }) => ({
  type: SET_PAYMENT_SECUTIRYCODE_FORM,
  payload: { securityCode },
});

export const setPaymentCardHolderNameForm = ({ cardholderName }) => ({
  type: SET_PAYMENT_CARDHOLDERNAME_FORM,
  payload: { cardholderName },
});

export const setPaymentIdentificationNumberForm = ({
  identificationNumber,
}) => ({
  type: SET_PAYMENT_IDENTIFICATIONNUMBER_FORM,
  payload: { identificationNumber },
});
