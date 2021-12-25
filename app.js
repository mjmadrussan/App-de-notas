
// Importamos el módulo fs para leer el archivo tareas.json
const fs = require('fs');
// Leemos / Consumimos el archivo tareas.json
const archivoTareas = fs.readFileSync('./tareas.json');
// Traducir / Convertir el texto en JSON a datos de Javascript
// A un array de objetos literales
const tareas = JSON.parse(archivoTareas);
const comando= require("process")

if(comando.argv[2]== "listar") {
    for (i=0; i<tareas.length; i++) {
        console.log(tareas[i].titulo)
    }
} else if (comando.argv[2]== undefined)
    console.log("Atención - Tienes que pasar una acción.")
else
    console.log(" No entiendo qué quieres hacer.")



