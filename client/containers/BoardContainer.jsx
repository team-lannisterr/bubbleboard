import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well } from 'react-bootstrap';
import BubbleBoard from '../components/BubbleBoard.jsx';
import TreeBoard from '../components/treeBoard.jsx';

class BoardContainer extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextState,nextProps){
    return nextState.hasNewInput;
  }

  componentDidUpdate(prevProps,prevState){
  }

  render() {
    return(
      <Well id="boardContainer">
      { this.props.flipped ? (
        <BubbleBoard id="bubbleBoardContainer" object={this.props.inputData} rootName={this.props.rootName} numberOfBoards={this.props.numberOfBoards} 
        inputJSONArray={this.props.inputJSONArray} name={'Test Data'}/>
      ) : (
        <TreeBoard object = {this.props.inputData} />
      )}
      </Well>
    )
  }
}

const mapStateToProps = store => ({
  //provide pertinent state here
  inputData: store.bubble.inputJSON,
  hasNewInput: store.bubble.renderBoard,
  flipped: store.bubble.flipped,
  rootName: store.bubble.rootName,
  numberOfBoards: store.bubble.numberOfBoards,
  inputJSONArray: store.bubble.inputJSONArray,
  
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);

