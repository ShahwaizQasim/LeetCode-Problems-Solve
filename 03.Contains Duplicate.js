// Q1 
// ak array lo usme jo bi duplicate number ho tw boolean ki form me batao 

function elementsDuplicate(nums) {
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}
// console.log(elementsDuplicate([1,2,3,4,1])); // true
// console.log(elementsDuplicate([1,2,3])); //false
// console.log(elementsDuplicate(['a','b','c','a'])); //true
// console.log(elementsDuplicate(['a','','a'])); //true


function ArrayValueDuplicate(arr) {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      console.log(arr[i]);
      return arr[i];
    }
  }
}

console.log(ArrayValueDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]));
