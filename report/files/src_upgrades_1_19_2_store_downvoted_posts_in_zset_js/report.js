__report = {"info":{"file":"src/upgrades/1.19.2/store_downvoted_posts_in_zset.js","fileShort":"src/upgrades/1.19.2/store_downvoted_posts_in_zset.js","fileSafe":"src_upgrades_1_19_2_store_downvoted_posts_in_zset_js","link":"files/src_upgrades_1_19_2_store_downvoted_posts_in_zset_js/index.html"},"complexity":{"methodAggregate":{"cyclomatic":3,"cyclomaticDensity":13.636,"halstead":{"bugs":0.277,"difficulty":10.14,"effort":8424.737,"length":139,"time":468.041,"vocabulary":63,"volume":830.842,"operands":{"distinct":50,"total":78,"identifiers":["__stripped__"]},"operators":{"distinct":13,"total":61,"identifiers":["__stripped__"]}},"params":3,"sloc":{"logical":22,"physical":31}},"settings":{"commonjs":true,"forin":false,"logicalor":true,"switchcase":true,"trycatch":false,"newmi":true},"classes":[],"dependencies":[{"line":3,"path":"../../database","type":"cjs"},{"line":9,"path":"../../batch","type":"cjs"},{"line":10,"path":"../../posts","type":"cjs"}],"errors":[],"lineEnd":31,"lineStart":1,"maintainability":70.377,"methods":[{"cyclomatic":1,"cyclomaticDensity":14.286,"halstead":{"bugs":0.041,"difficulty":5.6,"effort":686.694,"length":30,"time":38.15,"vocabulary":17,"volume":122.624,"operands":{"distinct":10,"total":16,"identifiers":["__stripped__"]},"operators":{"distinct":7,"total":14,"identifiers":["__stripped__"]}},"params":0,"sloc":{"logical":7,"physical":23},"errors":[],"lineEnd":30,"lineStart":8,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":16.667,"halstead":{"bugs":0.065,"difficulty":4.059,"effort":789.495,"length":43,"time":43.861,"vocabulary":23,"volume":194.513,"operands":{"distinct":17,"total":23,"identifiers":["__stripped__"]},"operators":{"distinct":6,"total":20,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":6,"physical":14},"errors":[],"lineEnd":26,"lineStart":13,"name":"<anonymous>"},{"cyclomatic":3,"cyclomaticDensity":100,"halstead":{"bugs":0.056,"difficulty":7.962,"effort":1349.15,"length":38,"time":74.953,"vocabulary":22,"volume":169.458,"operands":{"distinct":13,"total":23,"identifiers":["__stripped__"]},"operators":{"distinct":9,"total":15,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":3,"physical":6},"errors":[],"lineEnd":23,"lineStart":18,"name":"<anonymous>"}],"methodAverage":{"cyclomatic":1.667,"cyclomaticDensity":43.651,"halstead":{"bugs":0.054,"difficulty":5.873,"effort":941.779,"length":37,"time":52.321,"vocabulary":20.667,"volume":162.198,"operands":{"distinct":13.333,"total":20.667},"operators":{"distinct":7.333,"total":16.333}},"params":1,"sloc":{"logical":5.333,"physical":14.333}},"module":"src/upgrades/1.19.2/store_downvoted_posts_in_zset.js"},"jshint":{"messages":[{"severity":"error","line":1,"column":1,"message":"Use the function form of \"use strict\".","source":"Use the function form of \"use strict\"."},{"severity":"error","line":3,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":8,"column":19,"message":"Expected '}' to match '{' from line 5 and instead saw 'function'.","source":"Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'."},{"severity":"error","line":8,"column":28,"message":"Bad invocation.","source":"Bad invocation."},{"severity":"error","line":8,"column":30,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":9,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":10,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":11,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":11,"column":9,"message":"'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":11,"column":30,"message":"If a strict mode function is executed using function invocation, its 'this' value will be undefined.","source":"If a strict mode function is executed using function invocation, its 'this' value will be undefined."},{"severity":"error","line":13,"column":9,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":13,"column":14,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":13,"column":67,"message":"Expected '(' and instead saw '{'.","source":"Expected '{a}' and instead saw '{b}'."},{"severity":"error","line":14,"column":13,"message":"Expected an identifier and instead saw 'const' (a reserved word).","source":"Expected an identifier and instead saw '{a}' (a reserved word)."},{"severity":"error","line":14,"column":19,"message":"Expected ')' to match '{' from line 13 and instead saw 'postData'.","source":"Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'."},{"severity":"error","line":14,"column":19,"message":"'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":14,"column":28,"message":"Expected an identifier and instead saw '='.","source":"Expected an identifier and instead saw '{a}'."},{"severity":"error","line":14,"column":30,"message":"Expected ')' and instead saw 'await'.","source":"Expected '{a}' and instead saw '{b}'."},{"severity":"error","line":14,"column":35,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":15,"column":13,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":15,"column":31,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":17,"column":13,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":18,"column":42,"message":"'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":20,"column":21,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":21,"column":35,"message":"'template literal syntax' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":24,"column":13,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":24,"column":18,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":26,"column":10,"message":"Expected an identifier and instead saw ','.","source":"Expected an identifier and instead saw '{a}'."},{"severity":"error","line":26,"column":10,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":26,"column":11,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":28,"column":13,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":28,"column":18,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":28,"column":18,"message":"Expected '}' to match '{' from line 26 and instead saw ':'.","source":"Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'."},{"severity":"error","line":29,"column":9,"message":"Unexpected '}'.","source":"Unexpected '{a}'."},{"severity":"error","line":28,"column":23,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":28,"column":24,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":28,"column":23,"message":"Unrecoverable syntax error. (90% scanned).","source":"Unrecoverable syntax error."}]}}