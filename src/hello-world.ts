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
abstract class Car {
    constructor (public name: string) {}

    abstract makeSound(): void;

    public move(): void {
        console.log(this.name + " підвозить з вітерцем");
    }
}

class Audi extends Car {
    constructor(protected price: number, private owner: string) {
        super("Ауді");
        console.log("Ауді коштує " + this.price);
        console.log("Власник " + this.owner);
    }

    makeSound(): void {
        console.log("Бі-біп!!");
    }
}

class BMW extends Car {
    constructor(protected price: number, private owner: string) {
        super("БМВ");
        console.log("БМВ коштує " + this.price);
        console.log("Власник " + this.owner);
    }

    makeSound(): void {
        console.log("Ввжух!!");
    }
}

class Tavria extends Car {
    constructor(protected price: number, private owner: string) {
        super("Таврія не");
        console.log("Таврія коштує " + this.price);
        console.log("Власник " + this.owner);
    }

    makeSound(): void {
        console.log("Ніяк не звучить, бо таврія не заводиться");
    }
}

const audi: Car = new Audi(3000, "Герр фон Волф");
audi.move();
audi.makeSound();

const bmv: Car = new BMW(4000, "Фрау Ельза");
bmv.move();
bmv.makeSound();

const tavria: Car = new Tavria(200, "Дід Микола");
tavria.move();
tavria.makeSound();
