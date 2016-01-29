import React, {Component} from 'react';

import logo from '../images/logo.png';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-5">Hello, Webpackers!</h1>
          <p className="lead">
            This is an example application to demonstrate how we can use Webpack
            to prepare the production asset bundles.
          </p>
          <img src={logo} />
        </div>
      </div>
    );
  }
}

export default Jumbotron;
