import { LOGIN_SUCCESS, LOGIN_FAILED } from './constants';

// The initial state of the App
export const initialState = {
  isLoggedIn: '',
  message: {},
  errorTs: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        message: action.payload.message,
        errorTs: Date.now(),
      };
    default:
      return state;
  }
};
