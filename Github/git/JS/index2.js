const { lookup } = require("dns");

var dogs={
    "name":"Camper",
    "legs":4,
    "tails":1,
    "friends":["Everything"]
}

var mydog={
    "name":"Tommy",
    "legs":"4",
    "tials":"1",
    "friends":[]
}

console.log(mydog.name)
mydog.name="Tom";
//console.log(mydog.name)

function looks(val){
    var result="";

    var lookup={
        "alpha":"Adams",
        "bravo":"Bostons",
        "charlie":"Chicago",
        "delta":"Denver"
    }
    result=lookup[val];
    return result;
}

console.log(looks("charlie"));


function func(prop){
    if(dogs.hasOwnProperty(prop)){
        return dogs[prop];
    }
    else{
        return "Not Found";
    }

    return "Change";
}
console.log(func("name"));
console.log(func("nam"));

var mymusic=[
    {
        "artist":"Billy Joel",
        "title":"Piano man",
        "formats":[
            "CD",
            "LT",
            "LP"
        ],
        "gold":true
    },
    {
        "artist":"Sean paul",
        "title": "Cereal man",
        "release_year":"2003",
        "formats":[
            "Mp3",
            "Mp4"
        ]
    }
];


var mystorage={
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger seat":"crumbs"

        },
        "outside":{
            "trunk":"jack"
        }
    }
}

var gloveBoxContents = mystorage.car.inside["glove box"];
console.log(gloveBoxContents);

//nested arrays

var myplants=[
    {
        type:"flowers",
        list:[
            "rose",
            "tulip"
        ]
    },
    {
        type:"trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
]

var secondTree=myplants[1].list[1];

console.log(secondTree);

var arr=[];
var i=0;
while(i<5){
    arr.push(i);
    i++;
}

console.log(arr);

function multiply(arr){
    var product=1;

    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            product*=arr[i][j];
        }
    }
    return product;
}

var product=multiply([[1,2],[3,4],[5,6,7]]);
console.log(product);

//Random Fractions

function randfunction(){

    return Math.random();
}
console.log(randfunction());

function whole(){

    var randwhole=Math.floor(Math.random()*20);
    return randwhole;
}
console.log(whole());

function Rangerandom(min,max){

    var randrange=Math.floor(Math.random()*(max-min+1))+min;
    return randrange;
}
console.log(Rangerandom(1,10));


function convert(str){
    return parseInt(str,2);
}
console.log(convert("1011"));


//conditional operators
function checksign(num){
    return num>0 ? "Positive" : "Negative"
}

console.log(checksign(10));

function checksign(num){
    return num>0 ? "Positive" : num<0?"Negative" : "Zero";
}

console.log(checksign(0));


//var and let

var catName='timmy';
var catName='tom';

//the dogname will give error if the name is declared twice
//let dogName='Tommy';
//let dogName='John';

//strict mode

function strict(){
    "use strict";

    catName="Oliver";
    //quote=catName+" Say Hello";
}
//strict mode gives errors when you make common coding mistakes
console.log(strict());

//The scope of let is limited to the block

function strict2(){
    "use strict";

    let i="Function scope";
    if(true){
        let i="block scope";
        console.log("Scope of i is: "+i);
    }
    console.log("Scope of i is: "+i);

}
//strict mode gives errors when you make common coding mistakes
console.log(strict2());


function strict3(){
    "use strict";

    var i="Function scope";
    if(true){
        i="block scope";
        console.log("Scope of i is: "+i);
    }
    console.log("Scope of i is: "+i);
    //here once the value of i changd inside the block it chages globally
}
//strict mode gives errors when you make common coding mistakes
console.log(strict3());

//Arrow Functions

const fun=(a,b)=>{return a+b}

console.log(fun(4,5));

var con=(arr1,arr2)=>arr1.concat(arr2);

console.log(con([1,2],[3,4,5]));

var cons=(arr1,arr2)=>{return arr1.concat(arr2)}
console.log(cons([1,2],[3,4,5]));

//Higher Order Functions (map, filter, reduce)

const realarray=[4,5.6,-9.8,3.14,42,6];

const real=(arr)=>{
    const squaredIntegers=arr.filter(num=>Number.isInteger(num) && num>0).map(x=>x*x);
    //filter condition is to filter out the number which are integer and which are greater than 0
    //x means every element in the array
    return squaredIntegers;
}

console.log(real(realarray));

//... is rest operator
const sum=(function(){
    return function sum(...args){
        //here ... makes everything passed as an array
        //we can have any number of arguments passed
        return args.reduce((a,b) => a+b,0);
    }
})();

console.log(sum(1,2,3));

//spread operator looks like the rest operator but it expand an array

const arraya=['JAN','FEB','MAR','APR','MAY','JUNE'];
let arraya2;
(function(){
    arraya2=[...arraya];//it creates copy of arraya
    //arraya2=arraya;
    arraya[0]='potato';
})()
console.log(arraya2);