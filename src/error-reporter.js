
// react imports
import React from 'react';
import PropTypes from 'prop-types';
import Redbox from 'redbox-react';

const errorReporter = ({ error }) => {
  console.error(error);
  return <Redbox error={error} />;
};

errorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
};

export default errorReporter;
