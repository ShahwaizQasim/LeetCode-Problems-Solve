
function elementsDuplicate(nums){
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