import fs from 'fs';

function importBici() {
    const data = fs.readFileSync('./bicicletas.json', 'utf-8');
    return JSON.parse(data).bicicletas;
}

export { importBici };