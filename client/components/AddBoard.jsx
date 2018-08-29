import React from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";



const AddBoard = props => {
  return (
    <div>
       <button onClick={props.addBoard}>Add Board</button>
    </div>
  )   
 };

export default AddBoard;