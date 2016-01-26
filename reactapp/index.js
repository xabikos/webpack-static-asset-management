import React from 'react';
import ReactDOM from 'react-dom';

require('bootstrap');

import App from './components/app.jsx';

const reactAppNode = document.getElementById('react-app');
ReactDOM.render(<App />, reactAppNode);