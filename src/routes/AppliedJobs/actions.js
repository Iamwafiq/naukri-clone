import {
  GET_APPLIED_JOBS,
  APPLIED_JOBS_SUCCESS,
  APPLIED_JOBS_FAILED,
} from './constants';

export function appliedJobs(obj) {
  return {
    type: GET_APPLIED_JOBS,
  };
}
export function appliedJobsSuccess(obj) {
  return {
    type: APPLIED_JOBS_SUCCESS,
    payload: {
      ...obj,
    },
  };
}
export function appliedJobsFailed(obj) {
  return {
    type: APPLIED_JOBS_FAILED,
    payload: {
      ...obj,
    },
  };
}
