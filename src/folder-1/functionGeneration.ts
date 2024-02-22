// FUNCTION GENERATION
// function* stringSequence() {
//     yield "Hello";
//     yield " ";
//     yield "!";
//     yield " ";
//     yield "It's";
//     yield " ";
//     yield "me";
//     yield "!";
// }

// const iterable1 = stringSequence();
// let result = "";

// for (const item of iterable1) {
//      result += item;
// }
// console.log(result);

// class MyStringCollection {
//     private values: string[] = ["Hello", " ", "!", " ", "It's", " ", "me", "!"];

//     *getValues() {
//         for (let i=0; i<this.values.length; i+=1) {
//             console.log("here");
//             yield this.values[i];
//         }
//     }
// }

// const iterable2 = new MyStringCollection().getValues();
// result = "";

// for (const item of iterable2) {
//     result += item;
// }
// console.log(result);
// console.log(iterable2);