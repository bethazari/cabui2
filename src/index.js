
// react imports
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { HashRouter as Router, Route } from 'react-router-dom';

// utils imports
import errorReporter from './error-reporter';

// components imports
import MainContainer from './main/container';


const render = () => {
  ReactDOM.render(
    <AppContainer errorReporter={errorReporter}>
      <Router>
        <Route path="/" component={MainContainer} />
      </Router>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render();

// # TODO low: посмотреть как это, redbox и console.log|error работают в release сборке

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./main/container', () => {
    render();
  });
}
