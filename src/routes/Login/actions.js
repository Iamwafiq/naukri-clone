import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from './constants';

export function loginRequest(obj) {
  return {
    type: LOGIN_REQUEST,
    payload: {
      ...obj,
    },
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailed(obj) {
  return {
    type: LOGIN_FAILED,
    payload: {
      ...obj,
    },
  };
}
