function XO(str) {
    //code here
  const strArray = Array.from(str);
  let newStrX = strArray.filter((str1) => (str1.toLowerCase() == 'x'));
  let newStrO = strArray.filter((str1) => (str1.toLowerCase() == 'o'));
  let result = (newStrX.length == newStrO.length)? true: false;
  return result;
}
console.log(XO('xo'));
console.log(XO('xxOo'));
console.log(XO('xxxm'));
console.log(XO('Oo'));
console.log(XO('ooom'));
let str = "abcd";
strArr = Array.from(str);
console.log(strArr.join("-"));
for (let i = 0; i<str.length; i++) {
    
}
