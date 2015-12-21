import loremIpsum from 'lorem-ipsum';

const innerText = loremIpsum({
  count: 5,
  units: 'sentences'
});

const appNode = document.getElementById('app');
appNode.innerText = innerText;
