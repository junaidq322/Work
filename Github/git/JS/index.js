const { Console } = require("console");

console.log("Hello World");
var a=20;
var b=10;

console.log("Values before Swapping: \nA = "+a+" \nB = "+b);
a=a+b;//a=20+10=30
b=a-b;//b=30-10=20
a=a-b;//a=30-20=10

console.log("Values After Swapping: \nA = "+a+" \nB = "+b);

var name = "My name is ";
name+="Junaid";
console.log(name);
console.log(name.length);
var letter=name[name.length-1];//get last alphabet
console.log(letter);

function myword(noun,adj,verb,adverb){
    var result="My "+noun+" was "+adj+" which "+verb+" so "+adverb;

    return result;
}

console.log(myword("dog","big","ran","quickly"));
//multi dimentional arrays
var myar=[["The name is Junaid and Age is ",24],["The name is zuhair and the age is ",23]];
var myarr=[["The name is Junaid and Age is ",24],[["The name is zuhair and the age is ",23,"Profession is doctor"]]];
console.log(myar[0][1]);
console.log(myarr[1][0][2]);

var arr=myarr.pop();//remove element from end
console.log(arr[0]);
console.log("Popped Item: "+myarr);

var ar=myar.shift();//remove element from start
console.log("Shifted Item: "+ar);
console.log(myar);

console.log("Unshift array: ");
myar.unshift(["Junaid Qureshi",24]);//add element at start
console.log(myar);

ar.push(["The name is Zuhair and the age is ",21]);//add element at end
console.log("Pushed in array: "+ar);

function func(a,b){
    return a-b;
}

console.log(func(5,2));


var varglobal=5;
function func2(){
    var vargolbe=10;
    console.log("Varglobe Inside the function: "+vargolbe)
}

func2();
console.log(varglobal)

function NIL(arr,item){
    arr.push(item);
    return arr;
}

var testarr=[1,2,3,4,5];

console.log("Array before: "+testarr);
console.log("Array After: "+NIL(testarr,6));

//strict equality

function equal(val){
    if(val===3){
        return "equal";
    }
    else{
        return "Not equal";
    }
}

console.log(equal(3));

function numb(num){
    if(num<10){
        return "small";
    }
    else if(num<20){
        return "medium"
    }
    else if(num<30){
        return "large"
    }
    else return "Default"
}

console.log(numb(5));

var names=["Hole-in-one!","Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go home"];

function golfscore(par,strokes){

    if(strokes==1){
        return names[0];
    }
    if(strokes<=par-1){
        return names[1];
    }
    if(strokes==par-1){
        return names[2];
    }
    if(strokes==par){
        return names[3];
    }
    if(strokes==par+1){
        return names[4];
    }
    if(strokes==par+2){
        return names[5]
    }
    if(strokes>=par+3){
        return names[6]
    }
    return "change me";
}

console.log(golfscore(1,4));

function switchcase(val){
    var answer ="";
    switch(val){
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta";
            break;
        case 3:
            answer="gamma";
            break;
        case 4:
            answer="delta";
            break;
    }
    return answer;
}

console.log(switchcase(3));

