
// react imports
import React from 'react';
// import PropTypes from 'prop-types';

// material-ui imports
import {
    withStyles, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText
} from 'material-ui';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

export default class Sidebar extends React.Component {
  show() {}

  render() {
    const brand = (
      <div>
        <a href="https://www.creative-tim.com">
          <div>
            <img src="http://" alt="logo" />
          </div>
          test
        </a>
      </div>
    );
    return (
      <div>
        <Hidden mdUp>
          <Drawer
            anchor="right"
            type="temporary"
          >
            {brand}
            <List>
              <ListItem>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="up" />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            open
            anchor="left"
            type="permanent"
          >
            {brand}
            <List>
              <ListItem>
                <ListItemIcon><DraftsIcon /></ListItemIcon>
                <ListItemText primary="down" />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>
      </div>
    );
  }
}
