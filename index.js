const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

let DATA = {
  name: 'Mateo',
  title: 'Fullstack Developer',
  linkedin_url: 'https://www.linkedin.com/in/mateo-cobo-7847683b1/',
  update_interval: '3 hours',
  year_start: '2022',
  year_end: '2026',
  date: new Date().toLocaleDateString('es-EC', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'America/Guayaquil',
  }),
};

function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
    console.log('✅ README.md generado correctamente');
    console.log(`📅 Última actualización: ${DATA.date}`);
  });
}

generateReadMe();