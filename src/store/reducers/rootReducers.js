// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import addToCartReducer from './addtoCartReduceres';

const rootReducer = combineReducers({
    addToCart: addToCartReducer,
  // Add other reducers here if you have more
});

export default rootReducer;
