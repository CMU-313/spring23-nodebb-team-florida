/* eslint-disable */
// this file just used to demonstrate one use case of iroh
const Iroh = require('iroh');

let code = `let foo = 42`;

let stage = new Iroh.Stage(code);
stage.addListener(Iroh.VAR).on("after", function(e) {
  console.log(e.name, "=>", e.value);
});

eval(stage.script);