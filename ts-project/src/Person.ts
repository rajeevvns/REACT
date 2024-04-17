import Min from "./Min";

export default class Person {
    firstName: string;

    @Min(18) // decorator factory --> return function(target: any, propertyKey:string) 
    age: number;

    constructor(name: string, age: number) {
        this.firstName = name;
        this.age = age; // invokes set function
    }

    // setter
    set name(n: string) {
        this.firstName = n;
    }

    // getter
    get name() {
        return this.firstName;
    }
}

// p.name = "Harry" ==> set 
// x = p.name; ==> get
