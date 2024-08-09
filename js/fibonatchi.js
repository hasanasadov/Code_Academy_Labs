/*
function fibonatchi(n){
    if(n<=1){
        return n;
    }
    return fibonatchi(n-1)+fibonatchi(n-2);
}
console.log(fibonatchi(10));
*/

var n = 10;
var str = "";

var a = 0;
var b = 1;
var c = a + b;


for (var i = 0; i < n; i++) {
    str += c + " ";
    c = a + b;
    a = b;
    b = c;
}
console.log(str);