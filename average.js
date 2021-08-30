const fs = require('fs');
const lhciManifest = require('./reporting/manifest.json');
const medianEntry = lhciManifest.find(entry => entry.isRepresentativeRun)
const medianResult = JSON.parse(fs.readFileSync(medianEntry.jsonPath, 'utf-8'));
console.log('Median performance score was', medianResult.categories.performance.score * 100);
