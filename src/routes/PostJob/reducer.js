import { POST_JOB_SUCCESS, POST_JOB_FAILED } from './constants';

// The initial state of the App
export const initialState = {
  jobPosted: '',
  message: {},
  errorTs: '',
};

export const postJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_JOB_SUCCESS:
      return {
        ...state,
        jobPosted: true,
      };
    case POST_JOB_FAILED:
      return {
        ...state,
        jobPosted: false,
        message: action.payload.message,
        errorTs: Date.now(),
      };
    default:
      return state;
  }
};
