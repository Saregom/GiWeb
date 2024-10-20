
const express = require("express");
const bodyParser = require("body-parser");


let app = express();

let archivoRutas = require("./rutas/rutas-app")
let archivoRutasPersistencia = require("./rutas-persistencia/rutas-app")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use("/", archivoRutas) // Las rutas definidas se insertarán despues de "/"
app.use("/api/", archivoRutasPersistencia) // Las rutas definidas se insertarán despues de "/"

app.listen(5000, ()=>{
    console.log("Servidor en ejecución")
})

