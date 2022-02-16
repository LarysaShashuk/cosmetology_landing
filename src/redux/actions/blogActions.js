import $api from '../../http/index';
import { BLOG_ACTIONS_TYPES } from './index';

const getArticle = (articles) => ({
  type: BLOG_ACTIONS_TYPES.GET_ARTICLES,
  payload: articles,
});

const articleDeleted = () => ({
  type: BLOG_ACTIONS_TYPES.DELETE_ARTICLE,
});

const articleAdded = () => ({
  type: BLOG_ACTIONS_TYPES.ADD_ARTICLE,
});

const articleEdited = () => ({
  type: BLOG_ACTIONS_TYPES.EDIT_ARTICLE,
});

const getSingleArticle = (article) => ({
  type: BLOG_ACTIONS_TYPES.GET_SINGLE_ARTICLE,
  payload: article,
});

export const loadArticles = () => {
    return function (dispatch) {
     $api
      .get('/blog',)
      .then((response) => {
        dispatch(getArticle(response.data));
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
};

export const deleteArticle = (articleID) => {
  return function (dispatch) {
     $api
      .delete(`/blog/${articleID}`,)
      .then((response) => {
        dispatch(articleDeleted());
        dispatch(loadArticles());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addArticle = (newArticle) => {
  return function (dispatch) {
    $api
      .post(`/blog`, newArticle)
      .then((response) => {
        dispatch(articleAdded());
        dispatch(loadArticles());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const loadSingleArticle = (articleID) => {
  return function (dispatch) {
     $api
      .get(`/blog/${articleID}`,)
      .then((response) => {
        dispatch(getSingleArticle(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateArticle = (updatedArticle) => {
  return function (dispatch) {
    $api
      .put(`/blog`, updatedArticle)
      .then((response) => {
        dispatch(articleEdited());
        dispatch(loadArticles());
        dispatch(getSingleArticle(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
