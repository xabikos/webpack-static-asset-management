import React, {Component} from 'react';

import '../styles/style.scss'

import loremIpsum from 'lorem-ipsum';

import Counter from './counter.jsx';

class App extends Component {
  render() {
    const result = loremIpsum({
      count: 15,
      units: 'sentences'
    });
    return (
      <div>
        {result}
        <div id="counter">
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;