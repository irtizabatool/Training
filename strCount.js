// function XO(str) {
//     //code here
//   const strArray = Array.from(str);
//   let newStrX = strArray.filter((str1) => (str1.toLowerCase() == 'x'));
//   let newStrO = strArray.filter((str1) => (str1.toLowerCase() == 'o'));
//   let result = (newStrX.length == newStrO.length)? true: false;
//   return result;
// }
// console.log(XO('xo'));
// console.log(XO('xxOo'));
// console.log(XO('xxxm'));
// console.log(XO('Oo'));
// console.log(XO('ooom'));
// function repitition(str) {
//   let outStr = "";
//   str = str.toLowerCase();
//   for(let i = 0; i < str.length; i++) {
//     let loopStr = str[i].repeat(i+1);
//     //loopStr[i] = loopStr[i].toUpperCase();
//     if (i != 0){
//       loopStr = loopStr.charAt(0).toUpperCase() + loopStr.slice(1);
//       outStr = outStr + "-" + loopStr;
//     } else {
//       outStr = loopStr.toUpperCase();
//     }
//   }
//   console.log(outStr);
// }
// repitition("EFgHHHioow");
function binToDec(arr){
  arr.reverse();
  let decimalNum = 0;
    for (let i = 0; i<arr.length; i++) {
    decimalNum = decimalNum + arr[i] * 2 ** i;
  }
  console.log(decimalNum);
}
binToDec([0, 0, 1, 0]);
