
/*/ typescript create a tool thata can work with multiple data types and it is called generics 
below is an example for genereics <type_paramaneter can be used to accept and return any kind of objects from the function> /*/

function returnValue <type_parameter>  
    (value :type_parameter) : type_parameter{
    return value
}

  
console.log(returnValue(12))

console.log(returnValue('Sainath'))

console.log(returnValue({'name':'Sainath'}))

console.log(returnValue([12,13]))