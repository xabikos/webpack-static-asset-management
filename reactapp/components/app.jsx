import React, {Component} from 'react';

import '../styles/style.scss'

import loremIpsum from 'lorem-ipsum';

class App extends Component {
  render() {
    const result = loremIpsum({
      count: 15,
      units: 'sentences'
    });
    return (
      <div>
        {result}
      </div>
    );
  }
}

export default App;