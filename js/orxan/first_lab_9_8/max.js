var arr = [10,15,9,5,-5,36];
var maxx = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxx) {
        maxx = arr[i];
    }
}
console.log(maxx);
