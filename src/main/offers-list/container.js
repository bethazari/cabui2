
// lib imports
import axios from 'axios';

// react imports
import React from 'react';
import { CircularProgress } from 'material-ui/Progress';


class OffersListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      offers: [],
    };
  }

  componentDidMount() {
    axios.get('/api/2/cabinet/offer_presets/')
      .then((data) => {
        console.log(data);
        this.setState(prevState => ({
          ...prevState,
          isLoading: false,
          offers: data.data,
        }));
      });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ?
          <CircularProgress /> :
          JSON.stringify(this.state.offers)
        }
      </div>
    );
  }
}

export default OffersListContainer;
