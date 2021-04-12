let a = [11, 12, 13, 14, 15];
function b(x) {
            setTimeout((res, err) => res('Done'),2000)
            console.log(x);
            return(a[x]);
}
async function d() {
for (let i = 0; i<5; i++) {
 	
        console.log(b(i));
}
}



