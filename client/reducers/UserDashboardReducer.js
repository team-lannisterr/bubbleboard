import * as types from "../constants/actionTypes";
import UserContainer from '../containers/UserContainer.jsx'; 







const initialState = {
    boards: [], 
}
    

const UserDashboardReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.STORE_USER_DATA:
        boards.push(action.payload)
        return {...state, 
          boards: boards 
        } 
        default: 
          return state 
    }
}




export default UserDashboardReducer; 