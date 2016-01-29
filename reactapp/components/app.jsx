import React, {Component} from 'react';

import NavBar from './navBar.jsx';
import Jumbotron from './jumbotron.jsx';
import ApplicationController from './applicationController.jsx';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron />
        <ApplicationController />
        <Footer />
      </div>
    );
  }
}

export default App;
