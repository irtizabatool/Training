const p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Fourth Promise fulfilled at the end '), 3000);
}).then((message) => {
    console.log(message);
})
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('First Promise'), 1000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Second Promise'), 1000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Third Promise'), 1000);
})
Promise.all([
    p1,
    p2,
    p3
]).then((messages) => {
    console.log(messages);
})
