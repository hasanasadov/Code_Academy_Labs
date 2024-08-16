let print = (word) => console.log(word);
print("\n\n")





//Task A
function secondsToHms(seconds) {
    if (seconds < 0) {
        return "Wrong input";
    }
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor((seconds % 3600) % 60);
    return (
        seconds +
        " seconds = " +
        (h >= 0 ? h + "h " : "") +
        (m >= 0 ? m + "m " : "") +
        (s >= 0 ? s + "s " : "")
    );
}
print(secondsToHms(3601));
print("\n\n")








//Task B
const arr = [10, 4, 8, 4, 2, 1];




//method 1
const newArr1 = [];
for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let k = i + 1; k < arr.length; k++) {
        sum += arr[k];
    }
    newArr1.push((arr[i] > sum ? [i, arr[i]] : ""));
}
console.log("method 1",newArr1)
print("\n")




//method 2
let newArr2 = [];
arr.map((item, i) => {
    let sum = arr.slice(i + 1).reduce((prev, num) => {
        return prev + num;
    }, 0);
    if (item > sum) {
        newArr2.push([i,item])
    }
});
console.log("method 2",newArr2)
print("\n\n")
