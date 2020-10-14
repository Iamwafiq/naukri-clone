import { SUBMIT_MAIL, MAIL_FAILED, MAIL_SUCCESS } from './constants';

export function submitMail(obj) {
  return {
    type: SUBMIT_MAIL,
    payload: {
      ...obj,
    },
  };
}
export function mailSuccess(obj) {
  return {
    type: MAIL_SUCCESS,
    payload: {
      ...obj,
    },
  };
}
export function mailFailed(obj) {
  return {
    type: MAIL_FAILED,
    payload: {
      ...obj,
    },
  };
}
