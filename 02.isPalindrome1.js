/* Palindrome */
// madam
// level
// 121
// civic

/* Not Palindrome */



/* first method */

function isPalindrome1(s) {
  s = s.toLowerCase();
  s = s.replaceAll(/[^a-z0-9]/g, ""); // regex tamam non-alphanumeric characters ko remove krta hai

  let reverseString = s.split("").reverse().join("");
  let result = s === reverseString;

  return result;
}

console.log(isPalindrome1("level"));


/* practice */
let test = "mad$##@@!!am";
test = test.replaceAll(/[^a-z0-9]/g, "");
console.log(test.split("").reverse().join(""));
console.log(test); // madam


let test2 = "Shahwaiz";
// console.log(test2.split(""));


//console.log(isPalindrome1("mad&%am")); //true palindrome
// console.log(isPalindrome1("shahwaiz"));// false not palindrom