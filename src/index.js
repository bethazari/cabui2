
// react imports
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// utils imports
import errorReporter from './error-reporter';

// components imports
import RootContainer from './root-container';


const render = () => {
  ReactDOM.render(
    <AppContainer errorReporter={errorReporter}>
      <RootContainer />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render();

// # TODO low: посмотреть как это, redbox и console.log|error работают в release сборке

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./root-container', () => {
    render();
  });
}
