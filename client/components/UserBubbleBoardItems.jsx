import React from 'react';


//The job item will have a button to check if the job has been accepted or not. 
// 

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
};