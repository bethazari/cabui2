
// react imports
import React from 'react';
// import PropTypes from 'prop-types';

// material-ui imports
import {
    withStyles, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText
} from 'material-ui';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

export default () => (
  <div>
    <Hidden mdUp>
      <Drawer
        anchor="right"
        type="temporary"
      >
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
