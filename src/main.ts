// Variable
let textVariable: string = "Dwaxgio";
let numberVariable: number = 7;
let booleanVariable: boolean = true;
let anyVariable: any = "Any Variable here";

console.log(
  "Variables: text=> ",
  textVariable,
  " number=> ",
  numberVariable,
  " boolean=>",
  booleanVariable,
  "any=>",
  anyVariable
);

// Constant
const nameValue = "Dwaxgio";
console.log(nameValue);
// nameValue = "new value"; // NOT ALLOWED

// Array
let arrayValue: string[] = ["ArrayValue1", "ArrayValue2", "ArrayValue3"];
console.log("Array value 1:", arrayValue[0]);

let counter: number = 1;
arrayValue.forEach((element) => {
  console.log("Array value ", counter, ": ", element);
  counter++;
});

//Manipulating DOM
let divArrayElements: HTMLElement | null =
  document.querySelector("#div-array-values");

divArrayElements.innerHTML =
  "<ul>" +
  // console.log(arrayValue.map((element) => {
  //   return `<li>${element}</li>`;
  // }).join(""));

  arrayValue
    .map((element) => {
      return `<li>${element}</li>`;
    })
    .join("");

+"</ul>";
