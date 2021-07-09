//alert("hello");

//console.log("hello world");

//const name = "chin", age = 29, gender = "male";

// const sayHi = (name: string, age: number, gender?: string): string => {
//     return `Hello ${name}, you are ${age}, you are a ${gender}`;
// }

//const hi = sayHi(name, age, gender); // gender파라미터를 지울경우 gender? 혹은 gender=default가 아닌이상 컴파일에러

interface Human {
    name: string,
    age: number,
    gender: string
}

class Person implements Human {
    public name: string;
    public age: number;
    public gender: string;
    //private age: number;
    //private gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // get getAge(): number {
    //     return this.age;
    // }

    // get getGender(): string {
    //     return this.gender;
    // }
}

class Person2 implements Human {
    public name: string;
    public age: number;
    public gender: string;

    private age2: number;

    constructor(name: string, age: number, gender: string, age2: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;

        this.age2 = age2;
    }

    get getAge2(): number {
        return this.age2;
    }

}

// const person = {
//     name: 'chin',
//     age: 29,
//     gender: 'male'
// }

const person = new Person('chin', 29, 'male');
const person2 = new Person2('chin', 25, 'male', 29);

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

const sayHi2 = (person2: Person2): string => { // Getter 메서를 써야하므로 무조건 타입체크가 class가 되어버림
    return `Hello ${person2.name}, you are ${person2.age}(${person2.getAge2}), you are a ${person2.gender}`;
}

const hi = sayHi(person);
const hi2 = sayHi2(person2);

console.log(hi);
console.log(hi2);

export { };