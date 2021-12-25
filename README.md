# Objetivo
 Armar una app de tareas que nos permita guardar notas cortas 
 
 # Desafío 1
1. Crear un archivo tareas.json que contenga un array de objetos literales.
2. Cada objeto literal deberá tener las propiedades: titulo y estado. En donde el
título podrá ser cualquier cadena de texto y el estado podrá ser: terminada, en
progreso o pendiente.
3. Generar un archivo app.js que "consuma" el archivo de tareas.json. 
4. Mostrar el listado de tareas existente por terminal. 

# Desafío 2
1. Permitir que al momento de ejecutar el archivo app.js desde la terminal con
Node.js se pueda pasar un argumento después del nombre del archivo de la
siguiente manera:
    + node app.js listar
        + Si se escribe la palabra listar después del nombre del archivo, se
    deberán listar todas las notas existentes.
    + node app.js
        + Si NO se escribe ninguna palabra después del nombre del archivo,
    en la terminal deberá aparecer el texto: Atención - Tienes que
    pasar una acción.
    + node app.js cualquier texto
        + Si se llegase a pasar cualquier otro texto que no sea la palabra
    listar, en la terminal deberá aparecer el texto: No entiendo qué
    quieres hacer.
