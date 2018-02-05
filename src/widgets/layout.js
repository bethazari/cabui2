
// react imports
import React from 'react';

// widget imports
import Sidebar from '../widgets/sidebar';
import Header from '../widgets/header';

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isSidebarOpened: true,
    }
  };

  switchSidebar = () => {
    this.setState(prevState => ({
      ...prevState,
      isSidebarOpened: !prevState.isSidebarOpened,
    }));
  }

  render() {
    return (
      <div>
        <Sidebar open={this.state.isSidebarOpened} />
        <Header 
          switchSidebar={this.switchSidebar}          
          isSidebarOpened={this.state.isSidebarOpened}
        />
      </div>
    );
  }
}

export default Layout;
