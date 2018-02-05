
// react imports
import React from 'react';

// widget imports
import Sidebar from '../widgets/sidebar';
import Header from '../widgets/header';

class Layout extends React.Component {
  some(){}

  render() {
    return (
      <div>
        <Sidebar />
        <Header />
      </div>
    );
  }
}

export default Layout;
