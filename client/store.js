/**
 * ************************************
 *
 * @module  store.js
 * @author seano
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import bubbleReducer from './reducers/bubbleReducer';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(
  reducers,
  bubbleReducer, 
  composeWithDevTools()
<<<<<<< HEAD
=======

>>>>>>> c039663b96750ea40c338991fe62d363bcb2647e
);

export default store;