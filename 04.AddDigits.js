
function addDigits(nums){
   let ArrOfNums = nums.toString().split(""); // splitFunction number ko split nhi krta na or hum number ki length bhi maloom nhi kar sakty
   let sum = 0;
   for (let i = 0; i < ArrOfNums.length; i++) {
     //console.log(ArrOfNums[i]);
     sum += Number(ArrOfNums[i]);
    }
   if (sum >= 10) {
      let result = addDigits(sum); // Recursion
      return result;
   }
   return sum;
}
console.log(addDigits(255))