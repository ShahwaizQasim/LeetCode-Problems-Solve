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

  /* practice */
  // let test = "mad$##@@!!am";
  // test = test.replaceAll(/[^a-z0-9]/g, "");
  // console.log(test.split("").reverse().join(""));

  let test2 = "Shahwaiz";
  console.log(test2.split(""));


//console.log(isPalindrome1("mad&%am")); //true palindrome
// console.log(isPalindrome1("shahwaiz"));// false not palindrom

  /* second method  */

  function isPalindrome2(a){
    a =  a.toLowerCase();
    a = a.replaceAll(/[^a-z0-9]/g, "");
    
    for (let i = 0; i < a.length; i++) {
       if (a[i] !== a[a.length - i]) {
         return true;
       }   
    }
    return false;
  }
  //console.log(isPalindrome2("A man, a plan, a canal: Panama"));