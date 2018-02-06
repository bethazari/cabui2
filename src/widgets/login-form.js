
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
      email: '',
      password: '',
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

  handleChangeEmail(email) {
    this.setState(prevState => ({
      ...prevState,
      email,
    }));
  }

  handleChangePassword(password) {
    this.setState(prevState => ({
      ...prevState,
      password,
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
