function findLongestWordInString(str) {
  var words = str.split(" ");
  var longestWord = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

var str = "The quick brown fox jumped over the lazy dog";

console.log(findLongestWordInString(str));
