console.log('Script start');
setTimeout(() => {
  console.log('setTimeout 1');
}, 3000);
setTimeout(() => {
  console.log('setTimeout 2');
}, 0);
new Promise((resolve, reject) => {
    resolve('Promise 1 resolved');
}).then(res => console.log(res)).catch(err => console.log(err));
new Promise((resolve, reject) => {
    resolve('Promise 2 resolved');
}).then(res => console.log(res)).catch(err => console.log(err));
console.log('Script End'); 