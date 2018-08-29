import * as types from "../constants/actionTypes";
import UserContainer from '../containers/UserContainer.jsx'; 







const initialState = {
    boards: [], 
}
    

const UserDashboardReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.STORE_USER_DATA:
        return {...state, 
          boards: mapDispatchToProps.storeUserData(userInformation), 
        }
    };
}



export default UserDashboardReducer; 