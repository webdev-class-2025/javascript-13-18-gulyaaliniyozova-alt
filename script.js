
let userName="Gulya";
let age= 20;
let city="Khorog";

console.log(`My name is ${userName}. I am ${age} years old .I live in ${city} city`);

if(age>=18) {
    console.log("Совершеналетний");

}else{
    console.log("Не совершеналетний");
}

function great(name){
    console.log(`Welcome ${name}!`);
}
great("Roza");

function multiply(a,b){
    return a*b;
}
console.log(multiply(10,20));

for(let i=1;i<=10;i++){
    if(i%2===0){
        console.log(`${i} чётный`);
    }else{
        console.log(`${i} нечётный`);
    }
}