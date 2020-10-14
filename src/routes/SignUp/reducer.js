import { SIGNUP_SUCCESS, SIGNUP_FAILED } from './constants';

// The initial state of the App
export const initialState = {
  signedUp: '',
  message: {},
  errorTs: '',
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signedUp: true,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        signedUp: false,
        message: action.payload.message,
        errorTs: Date.now(),
      };
    default:
      return state;
  }
};
