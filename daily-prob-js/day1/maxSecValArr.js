let arr = [1, 3, 4, 5, 6, 7, 8];

let firstMaxVal = -Infinity;
let secondMaxVal = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > firstMaxVal) {
    secondMaxVal = firstMaxVal;
    firstMaxVal = arr[i];
  } else if (arr[i] > secondMaxVal && arr[i] !== firstMaxVal) {
    secondMaxVal = arr[i];
  }
}
console.log(secondMaxVal, "first way ----");
