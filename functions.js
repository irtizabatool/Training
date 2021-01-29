let count = 0;
function countVowels(name) {
    for (let i=0;i<name.length;i++) {
        if(name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u")
            count = count + 1;
    }
    return count;
}
let myName = "irtiza";
console.log("Hello " + myName + " !!! Your name has " + countVowels(myName) + " vowels.");