import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILED, RESET } from './constants';

export function signUpRequest(obj) {
  return {
    type: SIGNUP_REQUEST,
    payload: {
      ...obj,
    },
  };
}
export function signUpSuccess() {
  return {
    type: SIGNUP_SUCCESS,
  };
}
export function signUpFailed(obj) {
  return {
    type: SIGNUP_FAILED,
    payload: {
      ...obj,
    },
  };
}
export function resetMessage() {
  return {
    type: RESET,
  };
}