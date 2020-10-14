import {
  POSTED_JOBS_SUCCESS,
  POSTED_JOBS_FAILED,
  JOBS_SUCCESS,
  JOBS_FAILED,
  APPLY_JOB_SUCCESS,
  APPLY_JOB_FAILED,
  APPLICANTS_SUCCESS,
  APPLICANTS_FAILED,
} from './constants';
// The initial state of the App
export const initialState = {
  isLoggedIn: false,
  totalJobs: [],
  totalJobCount: '',
  jobApplied: '',
  applicantList: [],
  loading: true,
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTED_JOBS_SUCCESS:
      return {
        ...state,
        totalJobs: action.payload.response.data.data,
        totalJobCount: action.payload.response.data.metadata.count,
        loading: false,
      };
    case JOBS_SUCCESS:
      return {
        ...state,
        totalJobs: action.payload.response.data,
        totalJobCount: action.payload.response.metadata.count,
        loading: false,
      };
    case APPLY_JOB_SUCCESS:
      return {
        ...state,
        jobApplied: true,
      };
    case APPLY_JOB_FAILED:
      return {
        ...state,
        jobApplied: false,
      };
    case APPLICANTS_SUCCESS:
      return {
        ...state,
        applicantList: action.payload.response.data,
      };
    case APPLICANTS_FAILED:
      return {
        ...state,
        applicantList: false,
      };
    default:
      return state;
  }
};
