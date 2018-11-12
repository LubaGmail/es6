//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//
//  node set.js
//

const set1 = new Set(["ab", "cd", "ef", "gh", "ik"]);

console.log('set1', set1);
console.log("has", set1.has("cd"));
console.log('entries', set1.entries());
console.log('values', set1.values());
//console.log('clear', set1.clear());
console.log('size', set1.size);