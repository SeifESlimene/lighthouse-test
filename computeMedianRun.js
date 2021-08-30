const spawnSync = require('child_process').spawnSync;
const lighthouseCli = require.resolve('lighthouse/lighthouse-cli');
const {computeMedianRun} = require('lighthouse/lighthouse-core/lib/median-run.js');

const results = [];
for (let i = 0; i < 20; i++) {
  console.log(`Running Lighthouse attempt #${i + 1}...`);
  const {status = -1, stdout} = spawnSync('node', [
    lighthouseCli,
    'https://apprentus.fr/cours-guitare/lyon',
    '--output=json'
  ]);
  if (status !== 0) {
    console.log('Lighthouse failed, skipping run...');
    continue;
  }
  results.push(JSON.parse(stdout));
}

const median = computeMedianRun(results);
console.log('Median performance score was', median.categories.performance.score * 100);