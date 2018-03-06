
// react imports
import React from 'react';
import PropTypes from 'prop-types';

// material-ui imports
import { withStyles } from 'material-ui';
import { CircularProgress } from 'material-ui/Progress';

// widget imports
import Sidebar from '../widgets/sidebar';
import Header from '../widgets/header';


const styles = theme => ({
  frame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
  },
});

class Layout extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpened: true,
    };
  }

  switchSidebar = () => {
    this.setState(prevState => ({
      ...prevState,
      isSidebarOpened: !prevState.isSidebarOpened,
    }));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.frame}>
        <Sidebar open={this.state.isSidebarOpened} />
        <Header
          switchSidebar={this.switchSidebar}
          isSidebarOpened={this.state.isSidebarOpened}
        />
        <div className={classes.content}>
          {this.props.isLoading ?
            <CircularProgress /> :
            <div>
              {this.props.children}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
