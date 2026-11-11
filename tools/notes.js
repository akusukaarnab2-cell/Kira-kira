// Menjana nota perubahan untuk GitHub (Release & mesej commit) daripada changelog.js
const fs = require('fs');
const root = __dirname + '/..';
const props = {};
fs.readFileSync(root + '/version.properties', 'utf8').split(/\r?\n/).forEach(l => {
  const i = l.indexOf('=');
  if (i > 0) props[l.slice(0, i).trim()] = l.slice(i + 1).trim();
});
const CHANGELOG = new Function(fs.readFileSync(root + '/app/src/main/assets/changelog.js', 'utf8') + ';return CHANGELOG')();
const cur = CHANGELOG.find(c => String(c.b) === props.BUILD_NUMBER) || CHANGELOG[0];
const list = a => a.map(n => '- ' + n).join('\n');
const head = `${props.APP_NAME} v${props.VERSION_NAME} (Build ${props.BUILD_NUMBER})`;
const mode = process.argv[2] || 'release';
if (mode === 'commit') {
  console.log(`${head}: ${cur.nota.ms[0]}\n\n${list(cur.nota.ms)}`);
} else {
  console.log(`## ${head}\n\nTarikh / Date: ${cur.tarikh}\n\n### Perubahan (Bahasa Melayu)\n${list(cur.nota.ms)}\n\n### Changes (English)\n${list(cur.nota.en)}`);
}
