/**
 * Created by spavani on 4/27/2016.
 */

class Person{

    constructor(firstname,lastname){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get firstName(){
        return this.firstName;
    }

    get lastName(){
        return this.lastName;
    }

    addPerson(){
        console.log(this.firstName, this.lastName);
    }
}
