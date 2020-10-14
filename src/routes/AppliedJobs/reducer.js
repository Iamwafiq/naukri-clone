import { APPLIED_JOBS_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  totalJobs: [],
};

export const appliedJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLIED_JOBS_SUCCESS:
      return {
        ...state,
        totalJobs: action.payload.response.data,
      };
    default:
      return state;
  }
};
