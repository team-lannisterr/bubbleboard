/**
 * ************************************
 *
 * @module  App.jsx
 * @author seano
 * @date
 * @description app component that renders everything
 *
 * ************************************
 */

import React, {Component} from 'react';
import Main from './containers/MainContainer.jsx';
import LoginContainer from './containers/LoginContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div id="app">
        <div className='overlay'>
          <Main />
        </div>
      </div>
    )
  }
}

export default App;