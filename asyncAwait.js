async function add(n1, n2) {
    console.log("This is an add function");
    return new Promise((resolve, reject) => {
        if (n1 > 0){
            resolve(n1 + n2);
        } else {
            reject(0);
        }
    });
}
async function sumAndMultiply(num1, num2, num3) {
    console.log(`The Three numbers are: ${ num1 }, ${ num2 }, ${ num3 }`);
    let sum;
    try{
        sum = await add(num1, num2);
    } catch(err){
        console.log(`Error: ${err.message}`);
        sum = 0;
    }
    let product = num3 * sum;
    console.log("This is sum and multiply function");
    console.log(`Sum of First two numbers is: ${ sum }`);
    console.log(`Product of the sum of first two numbers and the third number is: ${ product }`);
    return new Promise((resolve, reject) => {
        resolve(product);
    });
}
async function display() {
    console.log("this is a display function");
    let pro = await sumAndMultiply(1, 1, 3);
    console.log("After sum and multiply");
}
display();