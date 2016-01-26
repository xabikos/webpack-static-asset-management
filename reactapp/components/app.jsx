import React, {Component} from 'react';
import loremIpsum from 'lorem-ipsum';

import Counter from './counter.jsx';
import NavBar from './navBar.jsx';
import Jumbotron from './jumbotron.jsx';
import MainContent from './mainContent.jsx';

import logo from '../images/logo.png';

class App extends Component {
  render() {
    const result = loremIpsum({
      count: 15,
      units: 'sentences'
    });
    return (
      <div>
        <NavBar />
        <Jumbotron />
        <MainContent />
        <a href="#"><img alt="SKG nodejs meetup" src={logo} /></a>
        {result}
        <div id="counter">
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
