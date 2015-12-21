var ContentGenerator = require('./contentGenerator');

var innerText = ContentGenerator.getParagraphs(5);

var appNode = document.getElementById('app');
appNode.innerText = innerText;
