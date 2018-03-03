
// react imports
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// material-ui imports
import {
  withStyles, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText,
} from 'material-ui';
import SettingsIcon from 'material-ui-icons/Settings';
import HomeIcon from 'material-ui-icons/Home';
import LinkIcon from 'material-ui-icons/Link';

const styles = theme => ({
  drawer: {
    position: 'relative',
    width: 240,
  },
  miniDrawer: {
    width: 60,
    overflowX: 'hidden',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    'background-color': theme.palette.primary.main,
  },
});

class Sidebar extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
  }

  some() {}

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Drawer
          anchor="left"
          type="permanent"
          classes={{ paper: classnames(classes.drawer, !this.props.open && classes.miniDrawer) }}
        >
          <div className={classes.drawerHeader}>
            <a href="https://coin32.com/">
              <div>
                { this.props.open ?
                  <img src="https://cab.coin32.com/img/coin32logo-00cb4660ae.png" alt="logo" /> :
                  <img src="https://cab.coin32.com/img/coin32logo-00cb4660ae.png" alt="logo" width="40" /> }
              </div>
            </a>
          </div>
          <Divider />
          <List>
            <Link to="/offers">            
              <ListItem>              
                <ListItemIcon><HomeIcon /></ListItemIcon>              
                <ListItemText primary="Offers" />              
              </ListItem>
            </Link>
            <Link to="/channels">
              <ListItem>
                <ListItemIcon><LinkIcon /></ListItemIcon>
                <ListItemText primary="Channels" />
              </ListItem>
            </Link>
            <Link to="/settings">
              <ListItem>
                <ListItemIcon><SettingsIcon /></ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
