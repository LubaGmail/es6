//console.log("stack: push, pop, peek, length");
// node stack.js
//
let letters = [];
let word = 'racecar';
let rword = '';

for (let i=0; i<word.length; i++) {
    letters.push(word[i]);
}

for (let i=0; i<word.length; i++) {
    rword += letters.pop();
}

if (word === rword) {
    console.log(word + " is a polindrome");
}
