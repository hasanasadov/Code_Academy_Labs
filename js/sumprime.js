//sum of 100 prime numbers
var sum = 0;
let strsum="";
let count = 0;

for(var i = 2; i < 999999; i++){
    var isprime = true;

    for(var j = 2; j <= i/2; j++){
        if(i % j == 0){
            isprime = false;
            break;
        }
    }
    if(isprime){
        strsum+=i+" + ";
        sum += i;
        count++;
    }
    if(count === 100){
        break;
    }
}
console.log(strsum," = ",sum);
