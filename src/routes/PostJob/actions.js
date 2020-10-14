import { POST_JOB, POST_JOB_SUCCESS, POST_JOB_FAILED } from './constants';

export function postJobRequest(obj) {
  return {
    type: POST_JOB,
    payload: {
      ...obj,
    },
  };
}
export function postJobSuccess(obj) {
  return {
    type: POST_JOB_SUCCESS,
    payload: {
      ...obj,
    },
  };
}
export function postJobFailed(obj) {
  return {
    type: POST_JOB_FAILED,
    payload: {
      ...obj,
    },
  };
}
