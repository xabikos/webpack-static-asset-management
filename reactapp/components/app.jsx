import React, {Component} from 'react';

import NavBar from './navBar.jsx';
import Jumbotron from './jumbotron.jsx';
import ApplicationController from './applicationController.jsx';

import logo from '../images/logo.png';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron />
        <ApplicationController />
      </div>
    );
  }
}

export default App;
