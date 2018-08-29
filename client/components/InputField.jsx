import React from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

const InputField = props => {
  return (
    <form onSubmit={props.onSubmitHandler} >
      <FormGroup controlId="inputField">
        <ControlLabel bsClass='textTitle'>JSON Input</ControlLabel>
        <FormControl
            type="text"
            value={props.rootName}
            placeholder="Root Name"
            onChange={props.onRootChange}
          />
        <FormControl
          bsClass='textInput'
          onChange={props.onChangeHandler}
          componentClass="textarea"
          placeholder="{ bubble:{bubble:bubble}, bubble:{bubble:{bubble:bubble}} }"
        />
      </FormGroup>
      <Button type="submit">Bubblify</Button>
    </form>
  );
};

export default InputField;
