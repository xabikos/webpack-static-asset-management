var paragraph = "This is a lengty paragraph. ";

module.exports = {
  getParagraphs: function(counter) {
    var result = "";
    for (var i = 0; i < counter; i++) {
      result += paragraph;    
    }
    return result;
  }
};