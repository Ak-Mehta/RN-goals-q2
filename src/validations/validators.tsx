import * as yup from 'yup';

export const onlyNumber = /^[0-9]*$/;
export const floatNumber = /^((\+|-)?(0|([1-9][0-9]*))(\.[0-9]+)?)$/;
export const cardsExpireMonthRegExp = /^(0[1-9]|1[0-2])\/([0-9]{4})$/;
export const monthExp = /^(0[1-9]|1[012])$/;
export const yearExp = /^\d{4}$/;
export const fullNameExp = /^[\w ]+$/;
export const expiryDateRegExp =
  /((0{1}[1-9]{1})|(1{1}[0-2]{1}))([2-9]{1}[0-9]{1})/;
export const nameRegExp = /^(?=.{1,60}$)[a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/;
export const noSpaceRegExp = /^\S*$/;

export const validateRequiredCardName = () =>
  yup
    .string()
    .matches(/^([^0-9]*)$/, 'cardname invalid')
    .required('cardname required')
    .max(50, 'max length must be in range of 50 chars');

export const validateRequiredCardNumber = () =>
  yup
    .string()
    .matches(onlyNumber, 'must be number')
    .required('cardnumber required')
    .min(19, 'min length must be 19');

export const validateRequiredCardMonth = () =>
  yup.string().required('month required').matches(monthExp, 'invalid month');

export const validateRequiredCardYear = () =>
  yup.string().required('year required').matches(yearExp, 'invalid year');

export const validateRequiredCardCvv = () =>
  yup
    .string()
    .matches(onlyNumber, 'cvv must be a number')
    .required('cvv required')
    .min(3, 'min length must be 3');

export const validateRequiredCardExpirationDate = () =>
  yup
    .string()
    // .matches(onlyNumber, 'validation.expiration.date.number')
    .required('expiration date required');
