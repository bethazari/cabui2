
// lib imports
import axios from 'axios';

// react imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// material-ui imports
import {
  withStyles, Button, TextField,
} from 'material-ui';
import SendIcon from 'material-ui-icons/Send';

const styles = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class LoginForm extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    successLoginCallback: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      loginData: {
        email: '',
        password: '',
      },
    };
  }

  login = () => {
    if (!this.state.isAuthenticating) {
      this.setState(prevState => ({
        ...prevState,
        isAuthenticating: true,
      }));
      axios.post(
        '/api/2/common/login',
        this.state.loginData,
        {
          xsrfCookieName: 'csrftoken',
          xsrfHeaderName: 'X-CSRFToken',
          withCredentials: true,
        },
      )
        .then(() => {
          console.log('authenticated');
          this.setState(prevState => ({
            ...prevState,
            isAuthenticating: false,
          }));
          this.props.successLoginCallback();
        })
        .catch((error) => {        
          console.error(error);
          this.setState(prevState => ({
            ...prevState,
            isAuthenticating: false,
          emailError: error.response.data.email[0],
          passwordError: error.response.data.password[0],
          }));
        });
    }
  }

  handleEnter(keyCode) {
    if (keyCode === 13) {
      this.login();
    }
  }

  handleChangeEmail(email) {
    this.setState(prevState => ({
      ...prevState,
      loginData: {
        ...prevState.loginData,
        email,
      },
    }));
  }

  handleChangePassword(password) {
    this.setState(prevState => ({
      ...prevState,
      loginData: {
        ...prevState.loginData,
        password,
      },
    }));
  }

  render() {
    const { classes, isAuthenticated } = this.props;

    return isAuthenticated ? <Redirect to="/channels" /> : (
      <form autoComplete="off">
        <div>
          <TextField
            label="Введите email..."
            autoFocus
            required
            error={!!this.state.emailError}
            helperText={this.state.emailError}
            value={this.state.email}
            onKeyUp={event => this.handleEnter(event.keyCode)}
            onChange={event => this.handleChangeEmail(event.target.value)}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Введите пароль..."
            type="password"
            required
            error={!!this.state.passwordError}
            helperText={this.state.passwordError}
            value={this.state.password}
            onKeyUp={event => this.handleEnter(event.keyCode)}
            onChange={event => this.handleChangePassword(event.target.value)}
            margin="normal"
          />
        </div>
        <Button
          raised
          color="primary"
          disabled={this.state.isAuthenticating}
          onClick={this.login}
        >
          вход
          <SendIcon className={classes.rightIcon} />
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
