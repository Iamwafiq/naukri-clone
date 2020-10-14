import { MAIL_FAILED, MAIL_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  mailSent: '',
  message: '',
};

export const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIL_SUCCESS:
      return {
        ...state,
        mailSent: true,
      };
    case MAIL_FAILED:
      return {
        ...state,
        mailSent: false,
      };
    default:
      return state;
  }
};
