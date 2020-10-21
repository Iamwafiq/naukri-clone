import { APPLIED_JOBS_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  totalJobs: [],
  loading:true
};

export const appliedJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLIED_JOBS_SUCCESS:
      return {
        ...state,
        totalJobs: action.payload.response.data || [],
        loading:false,
      };
    default:
      return state;
  }
};
