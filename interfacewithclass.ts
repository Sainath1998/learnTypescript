// Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes

interface  User {
    name : string ;
    id : number ;
}

class userAccount {
    name : string ;
    id : number ;

    constructor (name : string , id : number){
        this.name = name
        this.id = id
    }
}

const newUser  : User = new userAccount("Sainath",14)

console.log(newUser)