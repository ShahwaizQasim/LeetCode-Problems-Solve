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


// array me jo duplicate value hogi wo print ho jaegi ak array me
function ArrayValueDuplicate(arr) {
  arr.sort();
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      duplicates.push(arr[i])
    }
  }
  if (duplicates.length > 0) {
    console.log("Duplicates", duplicates);
  } else {
    console.log("Duplicates Not Found");
    return [];
  }
  return duplicates
}

const arr = [1, 1, 2, 2, 4, 5, 6, 4, 6, 7, 8];
console.log('Array Duplicate2',
  ArrayValueDuplicate(arr)
);


// Array me se duplicates elements ko remove kiya hai 
const removeDuplicates2 = (arr) => {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    // agar element unique array me nahi hai
    if (!uniqueArray.includes(arr[i])) {  // includes function check karta hai ke uniqueArray me wo value already hai ya nahi.
      uniqueArray.push(arr[i]); //tw add krdo
    }
  }

  return uniqueArray;
};

const ar3r = [1, 2, 3, 2, 4, 3, 4, 5, 6, 2];
console.log("Array:", removeDuplicates2(ar3r));


// Short Method 
const removeDuplicates3 = (arr) => [...new Set(arr)];
console.log('removeDuplicate3=>', removeDuplicates3(ar3r));
