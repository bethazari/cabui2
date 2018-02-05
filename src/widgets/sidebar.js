
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
          open={this.props.open}
          anchor="left"
          type="persistent"
          classes={{ paper: classes.drawer }}
        >
          <div className={classes.drawerHeader}>
            <a href="https://coin32.com/">
              <div>
                <img src="https://cab.coin32.com/img/coin32logo-00cb4660ae.png" alt="logo" />
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
