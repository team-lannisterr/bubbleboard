/**
 * ************************************
 *
 * @module  bubbleReducer
 * @author seano
 * @date
 * @description reducer for bubble data
 *
 * ************************************
 */

import * as types from "../constants/actionTypes";
import RJSON from "relaxed-json";

const initialState = {
  inputJSON: {},
  inputString: "",
  renderBoard: false,
  rootName: '',
  numberOfBoards: 1,
  boards: [], 
};

const bubbleReducer = (state = initialState, action) => {
  let numberOfBoards;

  switch (action.type) {
    case types.LOAD_BUBBLES:
      console.log('bubblifying: ', state.inputString);
      let inputJSON = RJSON.parse(state.inputString);
      return {...state,
        inputJSON,
        renderBoard: true
      };
    case types.INPUT_CHANGE:
      console.log('newState.inputString: ', action.payload)
      return { ...state,
        inputString: action.payload,
        renderBoard: false
      };
      case types.ROOT_CHANGE:
      console.log('newState.inputString: ', action.payload)
      return { ...state,
        rootName: action.payload
      };
      case types.ADD_BOARD: 
      console.log('adding new board', action.payload)
      console.log('board ' + state.numberOfBoards)
      numberOfBoards = state.numberOfBoards + 1;
      return { ...state,
        numberOfBoards
      };
    default:
      return state;
  }
};

export default bubbleReducer;
