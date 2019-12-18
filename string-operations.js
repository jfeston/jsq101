

// todo: add unit test
// todo: pass argument for number of characters to mask
// todo: validate there are enough characters to mask 
const mask = (str, maskChar = "#") => str.slice(-4).padStart(str.length, maskChar);

console.log(mask("123456789"))
