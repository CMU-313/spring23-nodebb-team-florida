const Iroh = require('iroh');

let code = `
  if (true) {
    for (ii = 0; ii < 3; ++ii) {
      let a = ii * 2;
    };
  }
`;

let stage = new Iroh.Stage(code);

// track variable
stage.addListener(Iroh.VAR)
.on("after", function(e) {
  console.log(" ".repeat(e.indent), e.name, "=>", e.value);
})

// while, for etc.
stage.addListener(Iroh.LOOP)
.on("enter", function(e) {
  // when we enter the loop
  console.log(" ".repeat(e.indent) + "loop enter");
})
.on("leave", function(e) {
  // when we leave the loop
  console.log(" ".repeat(e.indent) + "loop leave");
});

// if, else if
stage.addListener(Iroh.IF)
.on("enter", function(e) {
  // when we enter the if
  console.log(" ".repeat(e.indent) + "if enter");
})
.on("leave", function(e) {
  // when we leave the if
  console.log(" ".repeat(e.indent) + "if leave");
});

eval(stage.script);
