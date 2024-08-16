//General Object
let obj = {
    name: "Orxan",
    surname: "Qasimov",
    age: 20,
    getFullName: function(){return this.name + " " + this.surname;}
};



//Some Functions
let printObject = obj => {
    for(let key in obj){
        console.log(key + " : " + obj[key]);
    }
    //console.log(Object.keys(obj));
}
let printvalues = obj => {
    for(let value of Object.values(obj)){
        console.log(value);
    }
    //console.log(Object.values(obj));
}
let printEntries = obj => {
    for(let [key, value] of Object.entries(obj)){
        console.log(key + " : " + value);
    }
}





//TASKs

//Task 1 //count of object keys
let keyCount = obj =>  Object.keys(obj).length;
//console.log("count",keyCount(obj));



//Task 2 
let printArray = obj => {
    let newArr = [];
    for(let key in obj){
        newArr.push([key,obj[key]]);
    }
    console.log(newArr);
}
//printArray(obj);



//Task 3
//compare 2 objects

let obj1 = {
    surname: "Qasimov",
    name: "Orxan",
    age: 20,
};
let obj2 = {
    name: "Orxan",
    surname: "Qasimov",
    age: 23,
    number: 123
};
//method 1
let compareObjects = (obj1,obj2) => {
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(let key1 in obj1){
        let c=0;
        for(let key2 in obj2){
            if(key1 === key2){
                c++;
                if(obj1[key1] !== obj2[key2]){
                    console.log(key1 + " : " + obj1[key1] + " !== " + key2 + " : " + obj2[key2]);
                    return false;
                }
            }
        }
        if(c===0){
            console.log("There is no key " + key1 + " in the second object");
            return false;
        }
    }
    return true;
}

//method 2
let compareObjects2 = (obj1,obj2) => {
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(let key in obj1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}
//console.log(compareObjects(obj1,obj2));
//console.log(compareObjects2(obj1,obj2));


//Task 4
//merge 2 objects
let deleteSameElements = (obj1,obj2) => {
    let newObj = {};
    if (Object.keys(obj1).length < Object.keys(obj2).length){
        let temp = obj1;
        obj1 = obj2;
        obj2 = temp;
    }
    for(let key in obj1){
        let c=0;
        for(let key2 in obj2){
            if(key === key2){
               newObj[key] = obj1[key];
               c++;
            }
        }
        if(c===0){
            newObj[key] = obj1[key];
        }
    }
    return newObj;
}
console.log(deleteSameElements(obj1,obj2));