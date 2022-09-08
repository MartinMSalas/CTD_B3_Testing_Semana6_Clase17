const {generateText, createElement, validateInput} = require("../util.js");

describe("Validacion generacion de texto", () =>{
    test("Validacion Happy path",()=> {
        const text= generateText("Pepe",25);
        expect(text).toBe("Pepe (25 years old)");
    })
})
/*

describe("Crear elemento", () =>{
    test("Crear elemento Happy path",()=> {
        const text= createElement(String,"Pepe",String);
        const newElement = document.createElement(String);
  newElement.classList.add(String);
  newElement.textContent = "Pepe";

        expect(text).toBe(newElement);
    })
})

*/

describe("Validar datos de entrada", () =>{
    test("Validacion Happy path",()=> {
        const text= validateInput("text", " ", 35);
        expect(text).toBe(true);
    })
})