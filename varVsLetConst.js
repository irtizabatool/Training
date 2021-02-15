// var x = 3;

// function fxn(randomize){
//     var x;
//     if(randomize){
//         x = Math.random();
//         return x;
//     }
//     return x;
// }

// console.log(fxn(false));

const x = 3;
function func(randomize) {
    if (randomize) {
        let x = Math.random();
        return x;
    }
    return x;
}
console.log(func(true));