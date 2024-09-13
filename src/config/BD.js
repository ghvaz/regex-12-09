const mongoose = require("mongoose")
const urlBD = require("./conneccoes_banco.js")


async function main(){
        await mongoose.connect(urlBD)
}


main().catch(error => console.log("Erro no bando de dados \n"+error)).then(() => console.log("Vendo o banco de dados"))

module.exports = mongoose