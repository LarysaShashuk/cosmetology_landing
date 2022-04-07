import { addArticle, deleteArticle, updateArticle } from './blogActions';

export const BLOG_ACTIONS_TYPES = {
  GET_ARTICLES: 'GET_ARTICLES',
  ADD_ARTICLE: 'ADD_ARTICLE',
  DELETE_ARTICLE: 'DELETE_ARTICLE',
  EDIT_ARTICLE: 'EDIT_ARTICLE',
  GET_SINGLE_ARTICLE: 'GET_SINGLE_ARTICLE',
};

export const CUSTOMERS_ACTIONS_TYPES = {
ADD_CUSTOMER: 'ADD_ARTICLE',
ADD_CONTACT_INFORMATION: 'ADD_CONTACT_INFORMATION',
ADD_INDIVIDUAL_CONTRAINDICATIONS: 'ADD_INDIVIDUAL_CONTRAINDICATIONS',
ADD_APPOINTMENTS_PLAN: 'ADD_APPOINTMENTS_PLAN',
ADD_CUSTOMERS_FACE_MAP: 'ADD_CUSTOMERS_FACE_MAP',
ADD_CUSTOMERS_BODY_MAP: 'ADD_CUSTOMERS_BODY_MAP',
ADD_HOME_CARE: 'ADD_HOME_CARE',
ADD_ADDITIONAL_RECOMENDATIONS: 'ADD_ADDITIONAL_RECOMENDATIONS',
};

export const AUTH_ACTIONS_TYPES = {
LOGIN_START: 'LOGIN_START',
LOGIN_SUCCESS: 'LOGIN_SUCCESS',
LOGIN_FAIL: 'LOGIN_FAIL',
LOGOUT: 'LOGOUT',
REGISTER_START: 'REGISTER_START',
REGISTER_SUCCESS: 'REGISTER_SUCCESS',
REGISTER_FAIL: 'REGISTER_FAIL',
SET_ERROR_EMPTY: 'SET_ERROR_EMPTY',
CHECK_AUTH: 'CHECK_AUTH',
CHECK_AUTH_START: 'CHECK_AUTH_START',
CHECK_AUTH_SUCCESS: 'CHECK_AUTH_SUCCESS',
CHECK_AUTH_FAIL: 'CHECK_AUTH_FAIL',
}

export { addArticle, deleteArticle, updateArticle };
