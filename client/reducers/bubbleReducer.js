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
  flipped: true
};

const bubbleReducer = (state = initialState, action) => {
  let numberOfBoards;
  console.log(action)

  switch (action.type) {
    case types.LOAD_BUBBLES:
      let inputJSON = RJSON.parse(state.inputString);
      return {...state,
        inputJSON,
        renderBoard: true
      };
    case types.INPUT_CHANGE:
      return { ...state,
        inputString: action.payload,
        renderBoard: false
      };
      case types.ROOT_CHANGE:
      return { ...state,
        rootName: action.payload
      };
      case types.ADD_BOARD: 
      numberOfBoards = state.numberOfBoards + 1;
      return { ...state,
        numberOfBoards
      };
      case types.HANDLE_CARD_FLIP:
      return { ...state,
        flipped: !state.flipped,
        renderBoard: true
      };
    default:
      return state;
  }
};

export default bubbleReducer;
