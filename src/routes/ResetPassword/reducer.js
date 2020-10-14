import { RESET_SUCCESS, RESET_FAILED } from './constants';

// The initial state of the App
export const initialState = {
  resetSuccess: '',
};

export const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_SUCCESS:
      return {
        ...state,
        resetSuccess: true,
      };
    case RESET_FAILED:
      return {
        ...state,
        resetSuccess: false,
      };
    default:
      return state;
  }
};
