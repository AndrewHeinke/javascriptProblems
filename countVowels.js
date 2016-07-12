// Count Vowels – Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.
var inquirer = require('inquirer');
inquirer.prompt([
  {
    type: "input",
    message: "Type a word",
    name: "stringInput"
  }
]).then(function (answers) {
  var vowelsCount = 0;
  var str = answers.stringInput.toLowerCase();
  var len = answers.stringInput.length;
  for (var i = 0; i < len; i++) {
    if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  console.log("Number of vowels in word: " + vowelsCount);
});
