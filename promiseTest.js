let a = [1, 2, 3, 4];
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(a[0]), 1000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(a[1]), 1000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(a[2]), 3000);
})
Promise.all([
    p1,
    p2,
    p3
]).then((messages) => {
    console.log(messages);
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(a[3]), 4000);
    }).then((message) => {
        console.log(message);
    })
})
