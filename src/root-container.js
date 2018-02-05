
// react imports
import React from 'react';
import PropTypes from 'prop-types';

// material-ui imports
import { withStyles, Typography } from 'material-ui';

// widget imports
import Sidebar from './widgets/sidebar';
import Header from './widgets/header';

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
  }
});

class RootContainer extends React.Component {
  some(){}

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.frame}>
        <Sidebar />
        <Header />
        <div className={classes.content}>
          <Typography>You think water moves fast? You should see ice.You think water moves fast? You should see ice.</Typography>
          <Typography>You think water moves fast? You should see ice.You think water moves fast? You should see ice.</Typography>
          <Typography>You think water moves fast? You should see ice.You think water moves fast? You should see ice.</Typography>
          <Typography>You think water moves fast? You should see ice.You think water moves fast? You should see ice.</Typography>
          <Typography>You think water moves fast? You should see ice.You think water moves fast? You should see ice.</Typography>
          <Typography>You think water moves fast? You should see ice.You think water moves fast? You should see ice.</Typography>
          <Typography>You think water moves fast? You should see ice.You think water moves fast? You should see ice.</Typography>
          <Typography>You think water moves fast? You should see ice.You think water moves fast? You should see ice.</Typography>
        </div>
      </div>
    );
  }
}

RootContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RootContainer);
