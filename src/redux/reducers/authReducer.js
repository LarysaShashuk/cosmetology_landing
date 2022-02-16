import { AUTH_ACTIONS_TYPES } from '../actions';

const initialState = {
  user: null,
  userData: null,
  loading: false,
  error: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTIONS_TYPES.LOGIN_START:
    case AUTH_ACTIONS_TYPES.REGISTER_START:
    case AUTH_ACTIONS_TYPES.CHECK_AUTH_START:
      return {
        ...state,
        loading: true,
      };

    case AUTH_ACTIONS_TYPES.LOGIN_SUCCESS:
    case AUTH_ACTIONS_TYPES.REGISTER_SUCCESS:
    case AUTH_ACTIONS_TYPES.CHECK_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.token,
        userData: action.payload.user,
      };

    case AUTH_ACTIONS_TYPES.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: {...{login: action.payload}},
      };

      case AUTH_ACTIONS_TYPES.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: {...{register: action.payload}},
      };

    case AUTH_ACTIONS_TYPES.CHECK_AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: {...{ckeck_auth: action.payload}},
      };

    case AUTH_ACTIONS_TYPES.LOGOUT:
      return {
        ...state,
        user: null,
        userData: null,
      };

    case AUTH_ACTIONS_TYPES.SET_ERROR_EMPTY:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default authReducer;
