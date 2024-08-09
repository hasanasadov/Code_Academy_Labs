var dec = 0;
let bin="1001";
let sumstr = "";
for (var i = 0; i < bin.length; i++) {
    dec += bin[bin.length - 1 - i] * (2 ** i);
    if (i===bin.length-1){sumstr += bin[bin.length - 1 - i] * (2 ** i);}
    else{sumstr += bin[bin.length - 1 - i] * (2 ** i) + " + ";}
}
console.log("Binary number : ",bin);
console.log("Decimal number : ",sumstr, "=", dec);
