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

export const rootChange = (string) =>{
  return{
    type: types.ROOT_CHANGE,
    payload: string,
  }
}

export const addBoard  = (num) => {
  return{
    type: types.ADD_BOARD,
    payload: num
  }
}