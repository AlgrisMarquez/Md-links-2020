#!/usr/bin/env node
//Shebang: Indica  sistema que esto no es un script de shell y que debe usar un intérprete diferente
//const mdLinks = require('./md-links.js');

// para poner colores en las lineas de comando
const chalk = require('chalk');

//para obtener rutas de archivos
const path = require('path'); 

//Indica que ruta pasa el usuario
let fileToPathmd = process.argv[2]

const fetch = require('fetch');
//const verifyOptions = require('./verifyOp');

//se creara Funcion que permite si la ruta es relativa lo pasa a absoluta
//mientras se transforma ruta absoluta en relativa
fileToPathmd = path.resolve(fileToPathmd);
fileToPathmd = path.normalize(fileToPathmd);
console.log(chalk.bold("RUTA DEL ARCHIVO: ")+ (fileToPathmd))
console.log("Los argumentos son:"+fileToPathmd.length); 

//determinar si es directrio 
/*const fs = require('fs');

module.exports = (route) => new Promise((resolve, reject) => {
    fs.stat(route, (error, stats) => {
        if (error && error.code === 'ENOENT') {
            reject(error);
            console.log('la ruta no existe')
        } else if (error) {
            reject(error);
        }
        if (!error && stats.isDirectory()) {
            return resolve(true);
        }
        return resolve(false);
    });
})*/


const fileOrDirectory = (path) =>{
  return new Promise ((resolve,reject)=>{
      fs.lstats(path,(err,stats) =>{
          if (err){
              reject(err);
          }else if (stats.isDirectory()){
              resolve(goDirectory(path));
          }else{
              resolve(goMdFile(path));
          }
      });
   })
};
fileOrDirectory(path)
.then(res=>{
  console.log("muestrame",res);
})
.catch(err=>{
  console.log(err.code);
})

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

/*mdLinks(pathname)
.then(data => verifyOp(data, pathname))
.catch(error => console.log(error))
// Pasamos por el html para encontrar los enlaces y guardarlos en un arreglo
const arrayWithLinks = (dom, file) => {
    let save = [];
    const searchingLinks = dom.window.document.querySelectorAll('a').forEach(link =>{
    // Creamos un objeto que contiene el enlace del archivo, el texto y el archivo que lo contiene
      let objectInfo = {
        href : link.href,
        file : file,
        title : link.textContent
    //  console.log (objectInfo)
      }
    }
  }