import React from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

const InputField = props => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <FormGroup controlId="inputField">
        <ControlLabel bsClass='textTitle'>JSON Input</ControlLabel>
        <FormControl
            type="text"
            // value={}
            placeholder="Root Name"
            onChange={props.onChangeHandler}
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
