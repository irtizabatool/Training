let a = [11, 12, 13, 14, 15];
function b(x) {
  let p = new Promise((res,err) => {
            setTimeout(() => {},2000)
        })
        p.then(() => {
            console.log(x);
            res(a[x]);
        });
return p;
}
async function d() {
for (let i = 0; i<5; i++) {
 	let c = await b(i);
console.log(c);
}
}




