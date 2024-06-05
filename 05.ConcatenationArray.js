// Concatenation of Array


/* first method */
// const getConcatenation = (num) => {
//     let firstArray = num; 
//     let secondArray = num; 
//     let result = firstArray.concat(secondArray);
//     return result;
// }
// console.log(getConcatenation([1,2,3,4]));

/* second method */
// let getConcatenation2 = function (num) {
//     let n = num.length;
//     for(let i = 0; i < n; i++){
//         num.push(num[i]);
//     }
//     return num;
// }
// console.log(getConcatenation2([1,2,3]));


/* third method */
// const getConcatenation3 = (num) => [...num,...num];
// console.log(getConcatenation3([1,2,3,4])); 

/* fourth method */
// const getConcatenation3 = (nums) => nums.concat(nums);
// console.log(getConcatenation3([1,2,3]));

