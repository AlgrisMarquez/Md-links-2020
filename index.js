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

// analiza, inspecciona y modifica el HTML que estamos trabajando
const jsdom = require("jsdom");
const {JSDOM} = jsdom;

// para convertir a promesas metodos de node
const util = require('util');

const fetch = require('fetch');
const fetchUrl = require("fetch").fetchUrl;
//const { Console } = require('console');
//const verifyOptions = require('./verifyOp');*/

//se creara Funcion que permite si la ruta es relativa lo pasa a absoluta
//mientras se transforma ruta absoluta en relativa
fileToPathmd = path.resolve(fileToPathmd);
fileToPathmd = path.normalize(fileToPathmd);
console.log(chalk.bold("RUTA DEL ARCHIVO: ")+ (fileToPathmd))
console.log("Los argumentos son:"+fileToPathmd.length); 

// leer la el archivo de manera sincrona y en formato  utf8
//const fileRead = fs.readFileSync("README.md", {encoding: "utf8"}) 
const readArchive= (file) => {
fs.readFileSync('README.md', 'utf-8', (error, data)=> {
    if(error){
        console.log (chalk.red('Error, no se puede leer el archivo: '));
    } else{
      StringToHtml(data, file)
    };
  });  
};

//devuelve un array de objetos con todos los links (href, text, file)
const PromiseLinks = (path) => {
  let arrayObject = []
  let ArrayObjectfilter= []
  const searchLinks = util.promisify(fs.readFile);
  return searchLinks(path)
    .then((data) => {
      // pasar todo el archivo a un documento html 
      const file = md.render(data.toString());
      //Pase al constructor una cadena. Obtendrá un JSDOMobjeto
      const dom = new JSDOM(file);
      // buscar dentro del documento todos los selectores de hipervinculos, devuelve lista de nodos
      const nodeHyperLinks = dom.window.document.querySelectorAll('a');
      // pasar la lista de nodos a array
      const arrayHL = Array.from(nodeHyperLinks);
      // crea un array pero directamente con los links
      let objectInfo = {};
      arrayHL.map((a) => {
        objectInfo =
        {
          href: a.href,
          text: a.text,
          file: path
        }
        arrayObject.push(objectInfo)
      });
     
      //filtra los array para asegurarse que no tengan indices
      ArrayObjectfilter = arrayObject.filter((link) => 
        (link.href.slice(0, 11) !== 'about:blank'))
        console.log(ArrayObjectfilter)
        return ArrayObjectfilter
    })
    .catch((err) => console.error(err))
}

/*const ConvertStringToHtml = (contentFile, file) => {
  // pasar todo el archivo a un documento html 
  let StringToHtml = md.render(contentFile.toString());
  //Pasar al constructor una cadena. Obtendrá un JSDOMobjeto
  const dom = new JSDOM(StringToHtml);
  arrayWithLinks(dom, file)
}

const arrayWithLinks = (dom, file) => {
// para encontrar los enlaces y guardarlos en un arreglo
  let savearray = [];
  const searchingLinks = dom.window.document.querySelectorAll('a').forEach(link =>{
 
// Objeto tiene el enlace del archivo, el texto y el archivo que lo contiene
    let objectInfo = {
      href : link.href,
      file : file,
      title : link.textContent
    }
    savearray.push(objectInfo);
  });
  filterArray(savearray)
}


/*const filterArray = (savearray) => {
// Filtrar enlaces que no nos sirven
 const result = save.filter((obj) => (!obj.href.includes('about:blank') | !obj.length === 0 ));
  return validate(result)
}

///compruebag estados de los linsk 
const fetchStatus = (url) => {
  return new Promise((resolve, reject) => {
    fetchUrl(url, (error, meta) => {
      if (meta) {
        resolve(meta.status);
      } else {
        reject(error)
      }
    });
  });
};
console.log(fetchUrl.meta)
console.log(fetchStatus)

//y agregamos el status al objeto
const statusLinks = (link) => {
  const arrayObjecttotal = [];
  let objectInfototal = {};
  return fetchStatus(link.href)
    .then((response) => {
      let status = '';
      if (response.toString().slice(0, 1) <= '3') status = 'ok'
      else status = 'fail';
      objectInfototal =
      {
        href: link.href,
        text: link.text,
        file: link.file.split(process.cwd())[1],
        status: status,
        numberStatus: response
      }
      arrayObjecttotal.push(objectInfototal)
      return arrayObjectInfototal
    })
    .catch((err) => console.log(err))
}*/