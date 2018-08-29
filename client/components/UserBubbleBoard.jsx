import React, { Component } from 'react'; 
import { throws } from 'assert';











class UserBubbleBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //Board will hold an array of objects, time created, user, project. 
            boards: [{user: 'Me', board_id:'1213123131'}]
        }
    }


  render() {
    return(
      <div> 
        <UserBubbleBoardItem userInformation={this.props.boards} /> 
      </div>  
    )
  }
}


export default UserBubbleBoard; 