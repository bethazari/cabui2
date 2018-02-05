
// react imports
import React from 'react';
import PropTypes from 'prop-types';

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
  drawerHeader: theme.mixins.toolbar,
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
          classes={{ paper: classes.drawer }}
        >
          <div className={classes.drawerHeader}>
            <a href="https://www.creative-tim.com">
              <div>
                <img src="http://" alt="logo" />
              </div>
              test
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
};

export default withStyles(styles)(Sidebar);
