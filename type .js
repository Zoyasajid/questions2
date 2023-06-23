function greet (name){
    if(name === "john"){
        return ("hello "+ name)
    }
    else{
        return "invalid name"
    }
    
}
let name=prompt("enter the name");
console.log(greet(name));

// ques 2

function calculatesquare(number){
    return(Math.pow(number,2))
}
var number = Number(prompt("enter a Number"))
console.log(calculatesquare(number));

// ques 3
function isEven(ifeven){
if (ifeven % 2 === 0){
    return ("its an even number")
}
else {
    return ("its not an even number")

}
}
let even = Number(prompt("enter a number"))
console.log(isEven(even))

function concatenateStrings(string1,string2){
    return string1+string2
}

let res = concatenateStrings("hello ,", "World");
console.log(res)

function getlenght(string){
    return string.length
}
console.log(getlenght("deee"))



// Message 4
// ques 1
var nam =[
    {firstname:"shaaan ",lastname :"khan"},
    {firstname:"soban ",lastname :"sheikh"}
]

    

console.log(fuiiNae)

// ques 4

var person =
   { name :"ali",
   age:23,
   subject:"civics"
}

let countProperties = person.length
console.log(countProperties)
function countProperties(person){
    return Object.keys(person).length
}
console.log(countProperties(person))


function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
const object1 = { name: "John", age: 30 };
const object2 = { city: "New York", country: "USA" };

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject)
function is(str){
const fill = str.replace(/[^a-zA-Z0-9]/g,"").toLowercase();
const again =fill.split("").reverse().join("");
return fill === again;
}
console.log(is("level"));


  