import {Animal} from "../hello-world.js"

export class Cat implements Animal {
    name: string = "Cat";
    nutrition: string = "mice";
    habitat: string = "houses";
    drawAnimal(): string {
        return "Cats eat " + this.nutrition + " and live in the " + this.habitat
    }
}

export class Bird implements Animal {
    name: string = "Bird";
    nutrition: string = "worms";
    habitat: string = "trees";
    drawAnimal(): string {
        return "Birds eat " + this.nutrition + " and live in the " + this.habitat
    }
}

export class Fish implements Animal {
    name: string = "Fish";
    nutrition: string = "insects";
    habitat: string = "rivers";
    drawAnimal(): string {
        return "Fish eat " + this.nutrition + " and live in the " + this.habitat
    }
}