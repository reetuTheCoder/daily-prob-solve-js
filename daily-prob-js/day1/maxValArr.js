let arr = [1, 3, 4, 5, 6, 7, 8];

console.log(Math.max(...arr));

let result = arr.reduce((prev, curr) => {
  return prev < curr ? curr : prev;
},arr[0]);

console.log("second way ----", result);


let maxval = arr[0]


console.log(maxval);

for (let i = 1; i < arr.length; i++) {
   if (maxval < arr[i]) {
    maxval = arr[i]
   }
    
}
console.log("third way ----",maxval);
