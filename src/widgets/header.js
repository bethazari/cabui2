
// react imports
import React from 'react';
import PropTypes from 'prop-types';

// material-ui imports
import {
  withStyles, AppBar, Toolbar, Typography,
} from 'material-ui';

const styles = {
  appBar: {
    position: 'absolute',
    width: 'calc(100% - 240px)',
    marginLeft: 240,
  },
};

class Header extends React.Component {
  static propTypes = {
    classes: PropTypes.object.require,
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography type="title" color="inherit" noWrap>
              Permanent drawer
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
