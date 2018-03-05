
// lib imports
import axios from 'axios';

// react imports
import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

class ChannelsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      channels: [],
    };
  }

  componentDidMount() {
    axios.get('/api/2/cabinet/channels/')
      .then((data) => {
        console.log(data);
        this.setState(prevState => ({
          ...prevState,
          isLoading: false,
          channels: data.data.results,
        }));
      });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ?
          <CircularProgress /> :
          JSON.stringify(this.state.channels)
        }
      </div>
    );
  }
}

export default ChannelsListContainer;
