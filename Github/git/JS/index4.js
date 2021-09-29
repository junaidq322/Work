//promise

prom=(complete)=>{
    return new Promise((resolve,reject)=>{
        if(complete){
            resolve("I am successful");
        }else{
            reject("Failed");
        }
    });
}

let fulfill=(result)=>{
    console.log(result);
}

let rej=(error)=>{
    console.log(error)
}
//prom(true).then(fulfill);
//prom(false).catch(rej);


//Promises are used to handle asynchronous operations in JavaScript. 
//They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell 
//leading to unmanageable code.

//Promises are little complicated because of two functions which are passed resolve and reject.
//Instead of promises we use async and await

async function test(comp){
    if(comp){
        console.log("Successful");
    }
    else{
        console.log("Failed");
    }
}

/*test(true).then(()=>{
    console.log("We are successful");
})
test(false).catch(()=>{
    console.log("We have failed.")
})*/

//Using await with async, await means wait for the current code while run other code simultaniously.4

async function test2(){
    console.log("1: Mesasge");
    await console.log("2: Mesasge");
    console.log("3: Mesasge");
}

console.log("4: Mesasge");

test2();
console.log("5: Mesasge");
console.log("6: Mesasge");

//await will only be used inside async

//In promise.all then method would only be called when all the promises are fulfilled.