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