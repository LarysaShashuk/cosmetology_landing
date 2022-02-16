import axios from 'axios';
import $api from '../../http/index';
import { AUTH_ACTIONS_TYPES } from './index';

const loginStart = () => ({
  type: AUTH_ACTIONS_TYPES.LOGIN_START,
});

const loginSuccess = (token, user) => ({
  type: AUTH_ACTIONS_TYPES.LOGIN_SUCCESS,
  payload: {token, user},
});

const loginFail = (error) => ({
  type: AUTH_ACTIONS_TYPES.LOGIN_FAIL,
  payload: error,
});

const registerStart = () => ({
  type: AUTH_ACTIONS_TYPES.REGISTER_START,
});

const registerSuccess = (token, user) => ({
  type: AUTH_ACTIONS_TYPES.REGISTER_SUCCESS,
  payload: {token, user},
});

const registerFail = (error) => ({
  type: AUTH_ACTIONS_TYPES.REGISTER_FAIL,
  payload: error,
});

const logout = () => ({
  type: AUTH_ACTIONS_TYPES.LOGOUT,
});

export const setErrorEmpty = () => ({
  type: AUTH_ACTIONS_TYPES.SET_ERROR_EMPTY,
});

const checkAuthStart = () => ({
  type: AUTH_ACTIONS_TYPES.CHECK_AUTH_START,
});

const checkAuthSuccess = (token, user) => ({
  type: AUTH_ACTIONS_TYPES.CHECK_AUTH_SUCCESS,
  payload: {token, user},
});

const checkAuthFail = (error) => ({
  type: AUTH_ACTIONS_TYPES.CHECK_AUTH_FAIL,
  payload: error,
});
 

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    dispatch(setErrorEmpty());
    $api
      .post('/login', {
        email,
        password,
      })
      .then((response) => {
        dispatch(loginSuccess(response.data.accessToken, response.data.user));
        localStorage.setItem('token',response.data.accessToken);
      })
      .catch((error) => {
      return dispatch(loginFail(error.response.data.message))});
  };
};

export const logoutInitiate = () => {
  return function (dispatch) {
        $api
      .post('/logout')
      .then((response) => {
        dispatch(logout());
        localStorage.removeItem('token');
      })
      .catch((error) => console.log(error.response.data.message));
  };
};

export const registerInitiate = (userData) => {
  const { email, password, firstName, lastName, fatherName, phone } = userData;
  return function (dispatch) {
    dispatch(registerStart());
    dispatch(setErrorEmpty());
        $api
      .post('/registration', {
        email,
        password,
        firstName,
        lastName,
        fatherName,
        phone,
      })
      .then((response) => {
        dispatch(registerSuccess(response.data.accessToken, response.data.user));
        localStorage.setItem('token',response.data.accessToken);
      })
      .catch((error) => dispatch(registerFail(error.response.data.message)));
  };
};

export const checkAuthInitiate =() => {
  return function (dispatch) {
  dispatch(checkAuthStart());
    axios
      .get(`${process.env.REACT_APP_SERVER_API_URL}/refresh`, {withCredentials: true})
      .then((response) => {
        dispatch(checkAuthSuccess(response.data.accessToken, response.data.user));
        localStorage.setItem('token',response.data.accessToken);
      })
      .catch((error) => dispatch(checkAuthFail(error.response.data.message)));
  };
}