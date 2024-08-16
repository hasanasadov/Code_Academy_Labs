//sum of 100 prime numbers
var sum = 0;
let strsum="";
let count = 0;

var i =2
while(true){
    var isprime = true;

    for(var j = 2; j <= i/2; j++){
        if(i % j == 0){
            isprime = false;
            break;
        }
    }
    if(isprime){
        if (count === 99){
            strsum+=i;
        }
        else{strsum+=i+" + ";}
        sum += i;
        count++;
    }
    if(count === 100){
        break;
    }
    i++;
}
console.log(strsum," = ",sum);
