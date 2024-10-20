const express = require("express");
const controlador = require("./controlador")


let router = express.Router() //Objeto para configurar las rutas


router.get("/", (req, res)=>{
    res.status(200).send("<h1>Mi página principal api </h1>")
})
router.post("/usuario", controlador.crearUsuario)
router.get("/usuario", controlador.buscarUsuarios)
router.put("/usuario", controlador.actualizarUsuario)
router.delete("/usuario", controlador.eliminarUsuario)

module.exports = router