// console.log("Hello flower!");

// function var3() {
//     for (let i=0; i<=5; i+=1) {
//         // console.log(i);
//         setTimeout(function () {
//             console.log("1:", i);
//         }, 2000);
        
//     }
// }

// var3();



// ICE CREAM PRICE
// enum Size {
//     Small, 
//     Large
// }

// enum Topping {
//     Chocolate,
//     Caramel,
//     Berries
// }

// enum Marshmallow {
//     Yes,
//     No
// }

// function iceCream(size: Size, topping: Topping, marshmallow?: Marshmallow) {
//     const domElement: HTMLDivElement = document.createElement("div");
    

// var price1:number;
// var price2:number;
// var price3:number;
// switch (size) {
//     case Size.Small:
//         price1 = 10;
//         break;

//     case Size.Large:
//         price1 = 25;
//         break;
// }
// switch (topping) {
//     case Topping.Chocolate:
//         price2 = 5;
//         break;

//     case Topping.Caramel:
//         price2 = 6;
//         break;

//     case Topping.Berries:
//         price2 = 10;
//         break;
// }
// switch (marshmallow) {
//     case Marshmallow.Yes:
//         price3 = 5;
//         break;

//     case Marshmallow.No:
//         price3 = 0;
//         break;
// }
//     // orderSize();
//     // orderTopping();
//     // orderMarshmallow();
// var total: number = price1 + price2 + price3;
// document.body.appendChild(domElement);
// return total;
// }

// var result = iceCream(Size.Large, Topping.Caramel, Marshmallow.Yes);
// console.log(result);




// function orderSize() {
//     var message:string;
//     message = prompt("Enter size");
//     document.getElementById("demo1").innerHTML = message;
// }

// function orderTopping() {
//     var message:string;
//     message = prompt("Enter topping");
//     document.getElementById("demo2").innerHTML = message;
// }

// function orderMarshmallow() {
//     var message:string;
//     message = prompt("Enter marshmellow (if you want)");
//     document.getElementById("demo3").innerHTML = message;
// }



// ABSRTACT CLASSES
// abstract class Car {
//     constructor (public name: string) {}

//     abstract makeSound(): void;

//     public move(): void {
//         console.log(this.name + " підвозить з вітерцем");
//     }
// }

// class Audi extends Car {
//     constructor(protected price: number, private owner: string) {
//         super("Ауді");
//         console.log("Ауді коштує " + this.price);
//         console.log("Власник " + this.owner);
//     }

//     makeSound(): void {
//         console.log("Бі-біп!!");
//     }
// }

// class BMW extends Car {
//     constructor(protected price: number, private owner: string) {
//         super("БМВ");
//         console.log("БМВ коштує " + this.price);
//         console.log("Власник " + this.owner);
//     }

//     makeSound(): void {
//         console.log("Ввжух!!");
//     }
// }

// class Tavria extends Car {
//     constructor(protected price: number, private owner: string) {
//         super("Таврія не");
//         console.log("Таврія коштує " + this.price);
//         console.log("Власник " + this.owner);
//     }

//     makeSound(): void {
//         console.log("Ніяк не звучить, бо таврія не заводиться");
//     }
// }

// const audi: Car = new Audi(3000, "Герр фон Волф");
// audi.move();
// audi.makeSound();

// const bmv: Car = new BMW(4000, "Фрау Ельза");
// bmv.move();
// bmv.makeSound();

// const tavria: Car = new Tavria(200, "Дід Микола");
// tavria.move();
// tavria.makeSound();


// INTERFACES
// interface Animal {
//     name?: string;
//     nutrition: string;
//     habitat: string;

//     drawAnimal: () => string;
// }

// class Cat implements Animal {
//     name: string = "Cat";
//     nutrition: string = "mice";
//     habitat: string = "houses";
//     drawAnimal(): string {
//         return "Cats eat " + this.nutrition + " and live in the " + this.habitat
//     }
// }

// class Bird implements Animal {
//     name: string = "Bird";
//     nutrition: string = "worms";
//     habitat: string = "trees";
//     drawAnimal(): string {
//         return "Birds eat " + this.nutrition + " and live in the " + this.habitat
//     }
// }

// class Fish implements Animal {
//     name: string = "Fish";
//     nutrition: string = "insects";
//     habitat: string = "rivers";
//     drawAnimal(): string {
//         return "Fish eat " + this.nutrition + " and live in the " + this.habitat
//     }
// }

// const animal1: Animal = new Cat();
// const animal2: Animal = new Bird();
// const animal3: Animal = new Fish();

// console.log(animal1.drawAnimal());
// console.log(animal2.drawAnimal());
// console.log(animal3.drawAnimal());



// GENERICS
class myDictionary<TKey, TDescription, TValue> {
    private _key: TKey;
    public _description: TDescription;
    private _value: TValue;

    public set key(value: TKey) {
        if (!value) {
            throw new Error("Значення поля value не може бути порожнім!");
        }
        this._key = value;
    }

    public get key(): TKey {
        return this._key;
    }

    public set description(value: TDescription) {
        if (!value) {
            throw new Error("Значення поля value не може бути порожнім!");
        }
        this._description = value;
    }

    public get description(): TDescription {
        return this._description;
    }

    public set value(value: TValue) {
        if (!value) {
            throw new Error("Значення поля value не може бути порожнім!");
        }
        this._value = value;
    }

    public get value(): TValue {
        return this._value;
    }
}

const vocabulary1 = new myDictionary<string, string, number>();
vocabulary1.key = "key1";
vocabulary1.description = "Lorem ipsum";
vocabulary1.value = 123;

const vocabulary2 = new myDictionary<string, string, number>();
vocabulary2.key = "key2";
vocabulary2.description = "Lorem ipsum2";
vocabulary2.value = 123456;

const vocabulary3 = new myDictionary<string, string, number>();
vocabulary3.key = "key3";
vocabulary3.description = "Lorem ipsum3";
vocabulary3.value = 123789900;

console.log(vocabulary1);
console.log(vocabulary2);
console.log(vocabulary3);


// FUNCTION GENERATION

