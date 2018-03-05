
// lib imports
import axios from 'axios';

// react imports
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// material-ui imports
import { withStyles, Typography } from 'material-ui';

// widget imports
import Layout from '../widgets/layout';
import LoginForm from '../widgets/login-form';
import PrivateRoute from '../widgets/private-route';

// components imports
import ChannelsListContainer from './channels-list/container'

const styles = theme => ({
  frame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
  },
});

class MainContainer extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    axios.get('/api/2/common/auth/', {
      withCredentials: true,
    })
      .then((data) => {
        console.log(data);
        this.setState(prevState => ({
          ...prevState,
          isAuthenticated: true,
        }));
      });
  }

  successLoginCallback = () => {
    this.setState(prevState => ({
      ...prevState,
      isAuthenticated: true,
    }));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.frame}>
        <Layout />
        <div className={classes.content}>
          <Route
            path="/login"
            component={() => (
              <div>
                <Typography>
                  Вам нужно пройти авторизацию для входа в личный кабинет Coin32.
                </Typography>
                <LoginForm
                  isAuthenticated={this.state.isAuthenticated} 
                  successLoginCallback={this.successLoginCallback}
                />
              </div>
            )}
          />
          <PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/offers" component={() => <div>Здесь будет офферволл</div>} />
          <PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/channels" component={ChannelsListContainer} />
          <PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/settings" component={() => <div>Здесь будут настройки</div>} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MainContainer);
