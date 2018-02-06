
// react imports
import React from 'react';
import PropTypes from 'prop-types';

// material-ui imports
import { withStyles, Typography } from 'material-ui';

// widget imports
import Layout from '../widgets/layout';
import LoginForm from '../widgets/login-form';

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

  some(){}

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.frame}>
        <Layout />
        <div className={classes.content}>
          <Typography>Вам нужно пройти авторизацию для входа в личный кабинет Coin32.</Typography>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MainContainer);
