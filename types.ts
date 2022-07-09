type myBool = true | false

//  myBool type is boolean now


type windowSates = "opened" | "closed" | "minimised"

//  type of window states is now opened closed minimised

type lockstates = "locled" | "unlocked"


//  lockstates type now lockled unlocked



// get:ength takes string or array os string and return the length of it 
function getLength (obj : string | string []){
    return obj.length
}

console.log(getLength(["Sainath","is","new","to","typescript"])) // logs 5 in console
console.log(getLength("Sainath is new to typescript")) // logs 28 in console