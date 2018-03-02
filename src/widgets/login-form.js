
// lib imports
import axios from 'axios';

// react imports
import React from 'react';
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
      })
      .catch((error) => {
        console.log(error);
      });
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
    const { classes } = this.props;

    return (
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
