// console.log("Hello from folder-2");
import {Animal} from "../hello-world.js";
import {Cat} from "../folder-1/file.js";
import {Bird} from "../folder-1/file.js";
import {Fish} from "../folder-1/file.js";

const animal1: Animal = new Cat();
const animal2: Animal = new Bird();
const animal3: Animal = new Fish();

console.log(animal1.drawAnimal());
console.log(animal2.drawAnimal());
console.log(animal3.drawAnimal());