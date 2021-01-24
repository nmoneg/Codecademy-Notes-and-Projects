let input = "Hi, Human";
// console.log(input.length);

const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(i);
  for (let j = 0; j < vowels.length; j++) {
    // console.log(j);
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
  if (input[i] === "e" || input[i] === "u") {
      resultArray.push(input[i]);
  }
}

console.log(resultArray.join("").toUpperCase());