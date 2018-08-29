/**
 * ************************************
 *
 * @module  index.js
 * @author  seano
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import bubbleReducer from './bubbleReducer';
import UserdashboardReducer from './UserDashboardReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  bubble: bubbleReducer,
  dashboard: UserdashboardReducer
});

// make the combined reducers available for import
export default reducers;