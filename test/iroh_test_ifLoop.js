/* eslint-disable */
// this file just used to demonstrate one use case of iroh
const Iroh = require('iroh');

let code = `
  if (true) {
    for (i = 0; i < 3; ++i) {
      let a = i * 2;
    };
  }
`;

let stage = new Iroh.Stage(code);

// track variable
stage.addListener(Iroh.VAR).on('after', function(e) {
  console.log(' '.repeat(e.indent), e.name, '=>', e.value);
})

// track loops
stage.addListener(Iroh.LOOP).on('enter', function(e) {
  console.log(' '.repeat(e.indent) + 'loop enter');
}).on('leave', function(e) {
  console.log(' '.repeat(e.indent) + 'loop leave');
});

// track if, else
stage.addListener(Iroh.IF).on('enter', function(e) {
  console.log(' '.repeat(e.indent) + 'if enter');
}).on('leave', function(e) {
  console.log(' '.repeat(e.indent) + 'if leave');
});

eval(stage.script);
