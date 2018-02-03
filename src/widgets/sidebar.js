
// react imports
import React from 'react';
import PropTypes from 'prop-types';

// material-ui imports
import {
  withStyles, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText,
} from 'material-ui';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

const styles = {
  drawer: {
    position: 'relative',
    height: '100%',
    width: 240,
  },
};

class Sidebar extends React.Component {
  static propTypes = {
    classes: PropTypes.object.require,
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Drawer
          anchor="left"
          type="permanent"
          classes={{paper: classes.drawer}}
        >
          <div>
            <a href="https://www.creative-tim.com">
              <div>
                <img src="http://" alt="logo" />
              </div>
              test
            </a>
          </div>
          <List>
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

export default withStyles(styles)(Sidebar);
