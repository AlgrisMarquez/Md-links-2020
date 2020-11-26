#!/usr/bin/env node
//Shebang: Indica  sistema que esto no es un script de shell y que debe usar un intérprete diferente
//const mdLinks = require('./md-links.js');

// para poner colores en las lineas de comando
const chalk = require('chalk');

//para obtener rutas de archivos
const path = require('path'); 

//Indica que ruta pasa el usuario
let fileToPathmd = process.argv[2]

//para manipular los archivos
const fs = require('fs');

const fetch = require('fetch');
const { Console } = require('console');
//const verifyOptions = require('./verifyOp');

//se creara Funcion que permite si la ruta es relativa lo pasa a absoluta
//mientras se transforma ruta absoluta en relativa
fileToPathmd = path.resolve(fileToPathmd);
fileToPathmd = path.normalize(fileToPathmd);
console.log(chalk.bold("RUTA DEL ARCHIVO: ")+ (fileToPathmd))
console.log("Los argumentos son:"+fileToPathmd.length); 

// leer la el archivo de manera sincrona y en formato  utf8
//const fileRead = fs.readFileSync("README.md", {encoding: "utf8"}) 
fs.readFileSync('README.md', 'utf-8', (error, data)=> {
    if(error){
        console.log(`Error ${error}`);
    }else{
        //console.log(data);
    }
});
//let data = fs.readFileSync('README.md', 'utf-8');
//console.log(data);
/*const readFilemd = (README.md) => {
  return new Promise((resolve, reject) => {
      fs.readFile(
          "READMA-MD",
          'utf-8',
          (error, data) => {
              if (error) {
                  reject(error);
              }
              else {
                  resolve(data);
              }
          }
      )
  });
  console.log (data)
};
/* Función que lee archivos guiandome por video de Alpi
const readFilemd = (fileToPathmd,encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFilemd(fileToPathmd, encoding, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data);
      }
      
    })
  })
}
readFilemd('README.md', 'utf-8') =>{
  .then(res => {
      console.log(res)
  })
  .catch(err => {
      console.log(err);
  })};

/*mdLinks(pathname)
.then(data => verifyOp(data, pathname))
.catch(error => console.log(error))*/