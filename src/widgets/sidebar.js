
// react imports
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// material-ui imports
import {
  withStyles, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText,
} from 'material-ui';
import DraftsIcon from 'material-ui-icons/Drafts';

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
            <ListItem>
              <ListItemIcon><DraftsIcon /></ListItemIcon>
              <ListItemText primary="down" />
            </ListItem>
            <ListItem>
              <ListItemIcon><DraftsIcon /></ListItemIcon>
              <ListItemText primary="down" />
            </ListItem>
            <ListItem>
              <ListItemIcon><DraftsIcon /></ListItemIcon>
              <ListItemText primary="down" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Sidebar);
