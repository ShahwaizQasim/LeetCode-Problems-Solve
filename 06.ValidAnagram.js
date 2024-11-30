
/* Problem NO: 242 => Valid Anagram */

const ValidAnagram = (s,t) => {
    let sArgument = s.length;
    let tArgument = t.length;
    if (sArgument === tArgument) {
        let result = s.split('').sort().join("") == t.split('').sort().join("");
        return result;
    }
    return false;
} 
console.log(ValidAnagram("anagram","nagaram"));


/* 2nd Method */
const ValidAnagram2 = (s,t) => {
    let sArgument = s.length;
    let tArgument = t.length;
    let result = sArgument === tArgument ? s.split('').sort().join("") == t.split('').sort().join(""): false;
    return result;
}
//console.log(ValidAnagram("anagram","nagaram"));


/* 3rd Method */
const ValidAnagram3 = (s,t) => s.length === t.length ? s.split('').sort().join("") == t.split('').sort().join(""):false;
console.log(ValidAnagram("anagram","nagaram"));