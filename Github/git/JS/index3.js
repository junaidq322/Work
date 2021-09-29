//Destructuring objects
const avg_tem={
    today:66.7,
    tommorow:97
}
gettemptom=(avg)=>{
    const {tommorow: tempoftom}=avg;
    return tempoftom
}
console.log(gettemptom(avg_tem));

const stats = {
    max: 56,
    sd: 4.32,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.4
}

const half = (function(){
    return function half({max,min}){
        return (max+min)/2.0;
    }
})();

console.log(half(stats));


//Template literals

const person={
    name: "Zodixa",
    age:54
}

const greeting=`Hello, my name is ${person.name} and my age is ${person.age}`;

console.log(greeting);

const createPerson=(name,age,gender)=>{
    return{
        name: name,
        age: age,
        gender: gender
    }
}
console.log(createPerson("Junaid",23,"Male"));

//concise

const Person=(name,age,gender)=>({name,age,gender});
console.log(Person("Junaid",24,"Male"));


//Object with function

const bycycle={
    gear:2,
    setGear:function(newGear){
        this.gear=newGear;
    }
}

bycycle.setGear(3);
console.log(bycycle.gear);

//Class
//getter and setter
class book{
    constructor(author){
        this.author=author;
    }
    getwriter(){
        return this.author;
    }
    setwriter(updatedauthor){
        return this.author=updatedauthor;
    }
}

function makeclass(){
    class thermostat{
        constructor(temp){
            this._temp=5/9*(temp-32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedtemp){
            return this._temp=updatedtemp
        }
    }
    return thermostat;
}

const thermostat=makeclass();
const thermos = new thermostat(76);
let temp=thermos.temperature;
thermos.temperature=26;
temp=thermos.temperature;
console.log(temp);

//for in loop
txt={};
for (x in stats){
    txt[x]=stats[x];
}
console.log(txt);

number=10;
console.log(++number);

var uid=1;
var pass="Baguvix";
var message=(uid==1 && pass=="Baguvix")?"Welcome User":"Invalid Credentials";
console.log(message);

//try catch

function myFunc(){
    var a=100;
    try{
        var s = a.toUpperCase();
        console.log("Value of variable is : "+a);
    }
    catch(e){
        console.log("Exception");
    }
    finally{
        console.log("This block will execute");
    }
}

myFunc()