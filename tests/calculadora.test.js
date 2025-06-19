const calculadora = require("../models/calculadora.js");

test("Chamando arrow function de teste", () => {
    console.log("Chamando Arrow function de teste");
    resultado = calculadora.somar(2.5, 2.5);
    expect(resultado).toBe(5)
    
});

test("Chamando função callbackFunction de teste", callbackFunction);
test("Chamando função anônima de teste", function () {
    console.log("Chamando função Anônima de teste");
});

function callbackFunction() {
    console.log("Passando string para a soma");
    resultado = calculadora.somar("2", 10);
    expect(resultado).toBe("Erro")
}