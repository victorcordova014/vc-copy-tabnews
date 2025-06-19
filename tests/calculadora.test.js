test("Chamando arrow function de teste", () => {
    console.log("Chamando Arrow function de teste");
    calc = 2 * 2
    expect(calc).toBe(4)
    
});

test("Chamando função callbackFunction de teste", callbackFunction);
test("Chamando função anônima de teste", function () {
    console.log("Chamando função Anônima de teste");
});


function callbackFunction() {
    console.log("Chamando função CallBackFunction");
}