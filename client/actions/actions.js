/**
 * ************************************
 *
 * @module  actions.js
 * @author seano 
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes'

export const loadJSON = () => {
  console.log("loadJSON action creator called");
  return {
  type: types.LOAD_BUBBLES,
  }
};

export const inputChange = (string) =>{
  return{
    type: types.INPUT_CHANGE,
    payload: string,
  }
}

export const loadUserBubbleBoards = (object) =>  {
  //triggers reducer that will will fetch user data from server. 
  return{
    type: types.LOAD_USER_BUBBLEBOARDS,
    payload: object, 
  }
}