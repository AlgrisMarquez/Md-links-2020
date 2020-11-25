//Shebang: Indica  sistema que esto no es un script de shell y que debe usar un intérprete diferente
#!/usr/bin/env node
const mdLinks = require('./md-links.js');

// para poner colores en las lineas de comando
const chalk = require('chalk');

//para obtener rutas de archivos
const path = require('path'); 

//Indica que ruta pasa el usuario
const fileToPathmd = process.argv[2]

const fetch = require('fetch');
//const verifyOptions = require('./verifyOp');

//Funcion que permite si la ruta es relativa lo pasa a absoluta
const route = (fileToPathmd) => {
    path.resolve(fileToPathmd) === 
    path.normalize(fileToPathmd).replace(RegExp(path.sep + '$'), '');
    console.log(chalk.bold("RUTA DEL ARCHIVO: ")+ (route))
};

mdLinks(pathname)
.then(data => verifyOp(data, pathname))
.catch(error => console.log(error))