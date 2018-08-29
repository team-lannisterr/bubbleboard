import React from 'react';
import UserBubbleBoard from '../coomponents/UserBubbleBoard.jsx'; 




const BubbleBoardItem = (props) => {
  render() {
    return(
      <div> 
        <button className='isTaskComplete'></button>
         <div className='userInformation'>
          {props.userInformation}
        </div>
      </div>
    ) 
  };
}: