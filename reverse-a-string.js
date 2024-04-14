// “hello” should become “olleh”
// “Howdy” should become “ydwoH”
// “Greetings from Earth” should return ”htraE morf sgniteerG”

// using for loop
function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

// using recursion
// function reverseString(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverseString(str.substr(1)) + str.charAt(0);
//     // "ello" + "h" => elloh
//     // "llo" + "e" + "h" => lloeh
//     // "lo" + "l" + "e" + "h" => loleh
//     // "o" + "l" + "l" + "e" + "h" => olelh
//     // "" + "o" + "l" + "l" + "e" + "h" => olleh
//   }
// }

// using reduce
// function reverseString(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return str
//       .split("")
//       .reduce((reversedString, char) => char + reversedString, "");
//     // "hello".split("") => ["h", "e", "l", "l", "o"]
//     // ["h", "e", "l", "l", "o"].reduce((reversedString, char) => char + reversedString, "")
//     // "h" + "" => "h"
//     // "e" + "h" => "eh"
//     // "l" + "eh" => "leh"
//     // "l" + "leh" => "lleh"
//     // "o" + "lleh" => "olleh"
//   }
// }

// split , reverse and join
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
