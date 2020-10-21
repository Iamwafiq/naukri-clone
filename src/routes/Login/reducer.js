import { LOGIN_SUCCESS, LOGIN_FAILED, RESET } from './constants';

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
     case RESET:
      return {
        ...state,
        isLoggedIn: false,
        message: {},
        errorTs: "",
      };
    default:
      return state;
  }
};
