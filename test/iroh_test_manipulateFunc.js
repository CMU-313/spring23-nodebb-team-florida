/* eslint-disable */
// Demonstrates that Iroh can manipulate function returns
const Iroh = require('iroh');

function add(a, b) {
    return a + b;
};
  
let stage = new Iroh.Stage(add.toString());
stage.addListener(Iroh.FUNCTION).on("return", function(e) {
    if (e.name === "add") e.return = 42;
});

eval(stage.script);

console.log(add(2, 2));
console.log(add(10, 5));