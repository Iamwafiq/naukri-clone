import { RESET_PASSWORD, RESET_SUCCESS, RESET_FAILED } from './constants';

export function resetRequest(obj) {
  return {
    type: RESET_PASSWORD,
    payload: {
      ...obj,
    },
  };
}
export function resetSuccess() {
  return {
    type: RESET_SUCCESS,
  };
}
export function resetFailed() {
  return {
    type: RESET_FAILED,
  };
}
