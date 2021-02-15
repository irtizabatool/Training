let arr = ['a', 'b', 'c'];
arr.forEach(function (element) {
    console.log(element);
});

for (let element of arr) {
    console.log(element);
}

for (let [index, element] of arr.entries()) {
    console.log(index+'. '+element);
}