// encapsulation is used to hide the data and methods that are meant to be internal and only required for inner working of the object.


// health an dstamina are private anc cannot be accessed explicitlty the values can be set using the setter and getter method only
class Player {
    private health!: number;
    private stamina!: number;

     setHealth(newHeatlh : number){
        if(newHeatlh < 0 ){
            console.log('Sorry health cannot be less than 0');
        }else{
            this.health = newHeatlh
            
        }
    }

     getHealth(){
        return this.health
    }

     setStamina(newStamina : number){
        if(newStamina < 0 ){
            console.log('The stamina cannot be less than 0');
        }else{
            this.stamina = newStamina
            
        }
    }

     getStamina (){
        return this.stamina
    }
}

const Sainath = new Player();

Sainath.setHealth(-10) // Sorry health cannot be less than 0
Sainath.setHealth(10);
Sainath.setStamina(10);


console.log(Sainath.getHealth());  // 10
