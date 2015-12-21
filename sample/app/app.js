var loremIpsum = require('lorem-ipsum')

var innerText = loremIpsum({
  count: 5,
  units: 'sentences'
});

var appNode = document.getElementById('app');
appNode.innerText = innerText;
