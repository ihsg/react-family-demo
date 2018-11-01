import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT_REQUEST, USER_LOGOUT_FAILURE, USER_LOGOUT_SUCCESS } from '../actions';

const initState = {
  loading: false,
  isLogin: false,
  errorMessage: undefined,
};

export default (state = initState, action) => {
  switch (action.type) {
    case USER_LOGOUT_REQUEST:
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: true,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: false,
      };
    case USER_LOGOUT_FAILURE:
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
