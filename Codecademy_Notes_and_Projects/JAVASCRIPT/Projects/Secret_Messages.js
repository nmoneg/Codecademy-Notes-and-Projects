let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// console.log(secretMessage.length);
// console.log(secretMessage);

// *'pop' removes last element of an array*
secretMessage.pop();//removes the last element, "JavaScript"

// *'push' adds elements to the end of an array*
secretMessage.push("to", "Program");//adds "to" and "Program" to the end of the array

// *you can change elements within a array by accessing its index*
secretMessage[7] = "right";//changes index [7], "easily" to "right"

// *'shift' removes the first element of an array*
secretMessage.shift();//removes the first element, "Learning"

// *'unshift' adds elements to the beginning of an array*
secretMessage.unshift("Programming");//adds "Programming" to the beginning of the array

// *'splice' can remove several elements from an array in any location within the array; takes at least two parameters(pos, n), and can take up to three (pos, n, new elment(s)). Starting at index [pos] and progressing toward the end of array, (specified by 'n') the third element indicates what is replacing the elements beginning at index[pos] *
secretMessage.splice(6, 5, "know");//removes elements starting at index [6] and ending at index [10] ('get', 'right', 'the', 'first', 'time,'), and replaces them with the element "know"

// *'join' creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator*
console.log(secretMessage.join(" "));//returns the array as a string, separated by " " (spaces)

console.log(secretMessage.join());//returns the array as a string, separated by commas only