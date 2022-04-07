import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import blogReducer from './blogReducer';
import authReducer from './authReducer';
import customerReducer from './customerReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["auth", "blog", "customer"],
};

const rootReducer = combineReducers({
  blog: blogReducer,
  auth: authReducer,
  customer: customerReducer,
});

export default persistReducer(persistConfig, rootReducer);
