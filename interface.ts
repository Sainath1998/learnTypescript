// An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.

interface user {
    name : string ;
    id : number ;
}

const Sai : user = {
    name : "Sainath",
    id : 12
}

const saurabh : user = {
    name : "Saurabh sing",
    id : 13
}

const suraj : user = {
    name : "suraj uranw",
    id : 14
}


console.log(Sai ,'\n', suraj , "\n", saurabh)
