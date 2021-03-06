var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  console.log(filePath)
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  getWordCount(filePathOne , (err,count1) =>{
    if(err){
      callback(err, null);
      return;  
    }
    getWordCount(filePathTwo , (err,count2) =>{
      if (err) {
        callback(err, null);
        return;
      }
    callback(null,count1 + count2)
  })

})
};
getTotalWordCount('files/fileOne.txt','files/fileTwo.txt', (err,data) =>{
  console.log(data)
})
module.exports = getTotalWordCount;
