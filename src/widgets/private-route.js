
// react import
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


class PrivateRoute extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.object.isRequired,
  }

  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        )}
      />
    );
  }
}

export default PrivateRoute;
