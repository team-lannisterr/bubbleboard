import React, { Component } from 'react';
import { connect } from 'react';



//URL for UserData
const URL = 'http://localhost:3000/data'






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
}



render() {
  return(
    <div>
      
    </div> 
  )
}


const mapStateToProps = store => ({
  
})


const mapDispatchToProps = (dispatch) => ({
  storeUserData: (userInformation) => dispatch(actions.storeUserData(userInformation))
}); 



export default connect(mapStateToProps, mapDispatchToProps)(UserContainer); 