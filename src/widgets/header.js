
// react imports
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// material-ui imports
import {
  withStyles, AppBar, IconButton, Toolbar, Typography,
} from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

const styles = {
  appBar: {
    position: 'absolute',
    width: 'calc(100% - 240px)',
    marginLeft: 240,
  },
  appBarFullWidth: {
    position: 'absolute',
    width: 'calc(100% - 60px)',
    marginLeft: 60,
  },
};

class Header extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    switchSidebar: PropTypes.func.isRequired,
    isSidebarOpened: PropTypes.bool.isRequired,
  }

  some() {}

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar className={classnames(classes.appBar, !this.props.isSidebarOpened && classes.appBarFullWidth)}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={this.props.switchSidebar}
            >
              { this.props.isSidebarOpened ? <ChevronLeftIcon /> : <MenuIcon /> }
            </IconButton>
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
