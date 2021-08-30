const data = require('./report/manifest.json');

let total = 0;

data.map((test, index) => {
  console.log(`Test N°${index + 1}: ${test.summary.performance*100}`);
  total += test.summary.performance;
});

console.log(`Average Is: ${Math.round((total*100) / data.length)}`);
