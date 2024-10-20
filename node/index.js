const express = require('express'); // Framework para las peticiones http

const bodyParser = require('body-parser'); // Libreria para transformar los datos que llegan en las peticiones a objetos

var app = express(); // Variable del servidor - contiene las configuraciones

// middlewares - Paso intermedio antes de gestionar una peticion: app.use(funcion)
app.use(bodyParser.urlencoded({extended: false})) // Configuracion de body parser
app.use(bodyParser.json()); // Cuando se recibe una peticion body parse se encarga de convertirla a un objeto

// Rutas: app.metodo("ruta", funcion)

// Lanzar la aplicacion
app.listen(3000, ()=>{
    console.log("Servidor en ejecución");
})

app.get("/test", (req, res)=>{
    // res, hay que definir el estado de la respuesta, y enviar una respuesta
    res.status(200).send({
        message: "uwu"
    })
})
app.get("/", (req, res)=>{ // Definimos la ruta / (no es necesario)
    res.status(200).send("<h1>Pantalla inicio</h1>")
})

/* req contienen los datos enviados en la peticion
NOTA: si se envia un get, los datos llegan por query, si es post llegan por la propiedad body*/
app.post("/recibir-datos", (req, res)=>{
    console.log(req.body);
    res.status(200).send({
        datosEnviados: req.body, //body (post)
        enviadoPor: "post"
    })
})
app.get("/recibir-datos", (req, res)=>{
    console.log(req.query);
    res.status(200).send({
        datosEnviados: req.query, //query (get)
        enviadoPor: "get",
    })
})