import React, { Component } from "react";
import { connect } from "react-redux";
import { Well, Button } from "react-bootstrap";

//CHILDREN
import InputField from "../components/InputField.jsx";
import * as actions from "../actions/actions";
import AddBoard from "../components/AddBoard.jsx"

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.rootName)
    const {} = this.props;
    return (
      <Well id="sidebar" className='flexColumn'>
        <InputField
          onSubmitHandler={this.props.onSubmit}
          onChangeHandler={this.props.onChange}
          onRootChange={this.props.onRootChange}
          addBoard={this.props.onBoardAdd}
          //rootName={this.props.rootName} not sure if needed
          />
        <AddBoard addBoard={this.props.onBoardAdd} onSubmitHandler={this.props.onSubmit}></AddBoard>
        <Button>Switch Table View</Button>
      </Well>
    );
  }
}

const mapStateToProps = state => ({ 
  rootName: state.bubble.rootName,
  boardNumber: state.bubble.boardNumber
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  onSubmit: event => {
    event.preventDefault();
    dispatch(actions.loadJSON());
  },
  onChange: event => {
    dispatch(actions.inputChange(event.target.value));
  },
  handleCardFlip: () => dispatch(actions.handleFlip()),
  onRootChange: event => {
    dispatch(actions.rootChange(event.target.value));
  },
  onBoardAdd: event => {
    dispatch(actions.addBoard(event.target))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
