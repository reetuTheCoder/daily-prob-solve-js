const str = "hello";

console.log(
  "first way to reverse string ---",
  str.split("").reverse().join(""),
);

let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log("second way to reverse string ---", reversedStr);

function reverseString(str) {
  if (str === "") {
    console.log("string is empty");
    return "";
  }

  return reverseString(str.slice(1)) + str[0];
}

console.log("third way to reverse string ---", reverseString(str));

let output = str.split("").reduce((rev, char) => {
  return char + rev;
}, "");

console.log("fourth way to reverse string ---", output);
