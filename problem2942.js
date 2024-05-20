
/* Problem nO: 2942 => Finds Words Containing Character */



let findWordsContaining = function(words, x) {
    let result = [];
    for(let i = 0; i < words.length; i++){
       //result.push(words[i]);
       for (let j = 0; j < words[i].length; j++) {
         //result.push(words[i][j]);
         if (words[i][j] === x) {
            result.push(i);
            break;
         }
       }
    }     
    return result
 }
 console.log(findWordsContaining(["hello", "baby"]));

