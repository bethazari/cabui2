
// react imports
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// material-ui imports
import {
  withStyles, AppBar, IconButton, Menu, MenuItem, Toolbar, Typography,
} from 'material-ui';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';
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
  profileButton: {
    float: 'right',
  },
};

class Header extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    switchSidebar: PropTypes.func.isRequired,
    isSidebarOpened: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isProfileMenuOpen: false,
      profileMenuAnchorEl: null,
    };
  }

  showProfileMenu = (event) => {
    this.setState(prevState => ({
      ...prevState,
      isProfileMenuOpen: true,
      profileManuAnchorEl: event.curentTarget,
    }));
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar
          className={classnames(
            classes.appBar,
            !this.props.isSidebarOpened && classes.appBarFullWidth,
          )}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={this.props.switchSidebar}
            >
              { this.props.isSidebarOpened ? <ChevronLeftIcon /> : <MenuIcon /> }
            </IconButton>
            <Typography type="title" color="inherit" noWrap>
              Control Panel
            </Typography>
            { this.props.isAuthenticated &&
              <div>
                <IconButton
                  color="inherit"
                  onClick={this.showProfileMenu}
                  className={classes.profileButton}
                >
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  anchorEl={this.state.profileMenuAnchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={this.state.isProfileMenuOpen}
                  onClose={this.closeProfileMenu}
                >
                  <MenuItem onClick={this.closeProfileMenu}>Profile</MenuItem>
                  <MenuItem onClick={this.closeProfileMenu}>My account</MenuItem>
                </Menu>
              </div>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
