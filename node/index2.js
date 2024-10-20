// ---------
/* "type": "module", */

/* import mod2 from "./mod2.js"

mod2.saludar2("Juan") */

//-----Require----- 
//let mod1 = require("./mod1").default

//mod1.hola("Juan")
//mod1("Juan")
/* 
import * as readline from "node:stream/promises"; */
/* import {stdin as input, stdout as output} from "node:process"; */
const readline = require("readline")
const {stdin: input, stdout: output} = require("process")

const rl = readline.createInterface({input, output})

let paso = 1
let opcionElegida;
console.log(`Ingresa un numero: `)
rl.on("line", (input) => {
    console.log("paso = "+ paso)
    if(paso==1){
        opcionElegida=input
        console.log(`La opcion elegida es: ${opcionElegida}`)
        console.log("Digite los numeros separados por una coma: ")
        paso=2
        /* if (input==1){
            
        } */
    }
    else{

        //let array=input.split(",")
        if (opcionElegida=="1"){
           console.log("suma")
        }
        else if(opcionElegida=="7"){
            rl.close()
        }

        //paso=1
        console.log("Elija")
    }
    //rl.close()
})


