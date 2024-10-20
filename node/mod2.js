function saludar(name) {
    console.log("Hola mundo, soy " + name);
}

let conversation = {
    saludar2: (name) => {
        console.log("Hola mundo, soy " + name);
    },
    despedirse: () => {
        console.log("Chao mundo")
    }
}

export default conversation;

//-----Require-----
//exports.hola = saludar;
//module.exports = saludar;