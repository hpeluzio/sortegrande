import { SET_PAYMENT_CARDNUMBER_FORM } from './paymentFormActionTypes';
import { SET_PAYMENT_EXPIREDATE_FORM } from './paymentFormActionTypes';
import { SET_PAYMENT_SECUTIRYCODE_FORM } from './paymentFormActionTypes';
import { SET_PAYMENT_CARDHOLDERNAME_FORM } from './paymentFormActionTypes';
import { SET_PAYMENT_IDENTIFICATIONNUMBER_FORM } from './paymentFormActionTypes';
import { SET_PAYMENT_TOKEN_FORM } from './paymentFormActionTypes';
import { SET_PAYMENT_CARDFLAG_FORM } from './paymentFormActionTypes';
import { SET_CLEAR_FORM } from './paymentFormActionTypes';
import { SET_PAYMENT_METHODS_FORM } from './paymentFormActionTypes';

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

export const setPaymentTokenForm = ({ token }) => ({
  type: SET_PAYMENT_TOKEN_FORM,
  payload: { token },
});

export const setPaymentCardFlagForm = ({ cardFlag }) => ({
  type: SET_PAYMENT_CARDFLAG_FORM,
  payload: { cardFlag },
});

export const setPaymentClearForm = () => ({
  type: SET_CLEAR_FORM,
});

export const setPaymentMethods = ({ paymentMethods }) => ({
  type: SET_PAYMENT_METHODS_FORM,
  payload: { paymentMethods },
});
