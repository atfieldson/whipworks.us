import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import '../../stylesheets/main.css';
import ReactGA from 'react-ga';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import DesignABullwhip from '../DesignABullwhip/DesignABullwhip';
import SpecialtyWhips from '../SpecialtyWhips/SpecialtyWhips';
import Gallery from '../Gallery/Gallery';
import WhipmakingMaterials from '../WhipmakingMaterials/WhipmakingMaterials';
import Video from '../Video/Video';
import Checkout from '../Checkout/Checkout';

ReactGA.initialize('UA-131520101-1');
ReactGA.pageview(window.location.pathname + window.location.hash);

class App extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
    ReactGA.pageview('Homepage');
  };

  render() {
    return (
        <Router>
          <div>
            <Nav />
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />
              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
              <Route
                exact
                path="/home"
                component={HomePage}
              />
              <Route
                exact
                path="/login"
                component={LoginPage}
              />
              <Route
                exact
                path="/bullwhip"
                component={DesignABullwhip}
              />
              {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
              <Route
                exact
                path="/specialty"
                component={SpecialtyWhips}
              />
              <Route
                exact
                path="/gallery"
                component={Gallery}
              />
              <Route
                exact
                path="/materials"
                component={WhipmakingMaterials}
              />
              <Route
                exact
                path="/video"
                component={Video}
              />
              <Route
                exact
                path="/checkout"
                component={Checkout}
              />
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
            <Footer />
          </div>
        </Router>
        )
      }
    }
    
    export default connect()(App);
