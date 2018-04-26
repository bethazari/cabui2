
// lib imports
import axios from 'axios';

// react imports
import React from 'react';
import { Route } from 'react-router-dom';

// widget imports
import Layout from '../widgets/layout';
import LoginForm from '../widgets/login-form';
import PrivateRoute from '../widgets/private-route';

// components imports
import ChannelsListContainer from './channels-list/container';
import OffersListContainer from './offers-list/container';


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    axios.get('/api/2/common/auth/')
      .then((data) => {
        console.log(data);
        this.setState(prevState => ({
          ...prevState,
          isAuthenticated: true,
          isLoading: false,
        }));
      })
      .catch((error) => {
        console.error(error);
        this.setState(prevState => ({
          ...prevState,
          isLoading: false,
        }));
      });
  }

  successLoginCallback = () => {
    this.setState(prevState => ({
      ...prevState,
      isAuthenticated: true,
    }));
  }

  logout = () => {

  }

  render() {
    return (
      <Layout
        isLoading={this.state.isLoading}
        isAuthenticated={this.state.isAuthenticated}
        logout={this.logout}
      >
        <Route
          path="/login"
          component={() => (
            <LoginForm
              isAuthenticated={this.state.isAuthenticated}
              successLoginCallback={this.successLoginCallback}
            />
          )}
        />
        <PrivateRoute isAuthenticated={this.state.isAuthenticated} exact path="/" component={() => <div>Здесь будет офферволл</div>} />
        <PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/offers" component={OffersListContainer} />
        <PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/channels" component={ChannelsListContainer} />
        <PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/settings" component={() => <div>Здесь будут настройки</div>} />
      </Layout>
    );
  }
}

export default MainContainer;
