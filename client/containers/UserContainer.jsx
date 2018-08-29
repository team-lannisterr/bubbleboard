import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserBubbleBoard from '../components/UserBubbleBoard.jsx';
//URL for UserData
const URL = 'http://localhost:3000/data';

const mapStateToProps = store => ({
  
}); 
    
const mapDispatchToProps = (dispatch) => ({
  storeUserData: (userInformation) => dispatch(actions.storeUserData(userInformation))
});

class UserContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: [],

        }
    }
//fetches user data from database. 
  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
          this.props.storeUserData(data)  
      })
      .catch(error => console.log(error)) 
  }

  render() {
    return(
      <div>
        <UserBubbleBoard userInformation={ this.props.state.userData } />
      </div> 
    )
  }
}





export default connect(mapStateToProps, mapDispatchToProps)(UserContainer); 