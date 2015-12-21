import loremIpsum from 'lorem-ipsum';

import '../styles/style.scss'

const innerText = loremIpsum({
  count: 15,
  units: 'sentences'
});

const appNode = document.getElementById('app');
appNode.innerText = innerText;
