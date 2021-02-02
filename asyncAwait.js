function sum(n1, n2) {
    return n1 + n2;
}
async function asyncSumAndMultiply(num1, num2, num3) {
    console.log(`The Three numbers are: ${ num1 }, ${ num3 }, ${ num3 }`);
    let sum;
    try{
        sum = await sum(num1, num2);
    } catch(err){
        console.log(`Error: ${e.message}`);
        sum = 0;
    }
    let product = num3 * sum;
    console.log(`Sum of First two numbers is: ${ sum }`);
    console.log(`Product of the sum of first two numbers and the third number is: ${ product }`);
    return product;
}
asyncSumAndMultiply(1, 2, 3);