import {
  GET_POSTED_JOBS,
  POSTED_JOBS_SUCCESS,
  POSTED_JOBS_FAILED,
  GET_JOBS,
  JOBS_SUCCESS,
  JOBS_FAILED,
  APPLY_JOB,
  APPLY_JOB_SUCCESS,
  APPLY_JOB_FAILED,
  GET_APPLICANTS,
  APPLICANTS_SUCCESS,
  APPLICANTS_FAILED,
} from './constants';

export function getPostedJobs(obj) {
  return {
    type: GET_POSTED_JOBS,
  };
}
export function postedJobsSuccess(obj) {
  return {
    type: POSTED_JOBS_SUCCESS,
    payload: {
      ...obj,
    },
  };
}
export function postedJobsFailed(obj) {
  return {
    type: POSTED_JOBS_FAILED,
    payload: {
      ...obj,
    },
  };
}

export function getJobs(obj) {
  return {
    type: GET_JOBS,
  };
}
export function jobsSuccess(obj) {
  return {
    type: JOBS_SUCCESS,
    payload: {
      ...obj,
    },
  };
}
export function jobsFailed(obj) {
  return {
    type: JOBS_FAILED,
    payload: {
      ...obj,
    },
  };
}
export function applyJob(obj) {
  return {
    type: APPLY_JOB,
    payload: {
      ...obj,
    },
  };
}
export function applyJobSuccess(obj) {
  return {
    type: APPLY_JOB_SUCCESS,
    payload: {
      ...obj,
    },
  };
}
export function applyJobFailed(obj) {
  return {
    type: APPLY_JOB_FAILED,
    payload: {
      ...obj,
    },
  };
}
export function getApplicants(obj) {
  return {
    type: GET_APPLICANTS,
    payload: {
      ...obj,
    },
  };
}
export function applicantsSuccess(obj) {
  return {
    type: APPLICANTS_SUCCESS,
    payload: {
      ...obj,
    },
  };
}
export function applicantsFailed(obj) {
  return {
    type: APPLICANTS_FAILED,
    payload: {
      ...obj,
    },
  };
}
