
// react imports
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// components imports
import MainContainer from './main/container';

class RootContainer extends React.Component {
  some(){}

  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={MainContainer} />          
        </Router>
      </div>
    );
  }
}

export default RootContainer;
