/* 
Livros
{
  "title": "Livro Exemplo",
  "author": "Autor Exemplo",
  "year": 2021,
  "genre": "Ficção"
}
*/

const BD = require("../config/BD.js")
const book = BD.Schema

const livrosSchema = new book({
    titulo: {
        type: String,
        required: [true, "O campo 'tiulo' e obrigatório"], 
    },
    autor: {
        type: String, 
        required: [true, "O campo 'autor' e obrigatório"], 
    },
    ano: {
        type: Number, 
        required: [true, "O campo 'ano' e obrigatório"], 
    },
    genero: {
        type: String, 
        required: [true, "O campo 'genero' e obrigatório"], 
    },
})  

const livros = BD.model("livro", livrosSchema)
module.exports = livros