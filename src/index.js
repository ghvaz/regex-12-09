/*
Sistema de Gerenciamento de LivrosObjetivo
Desenvolver um sistema CRUD para gerenciar livros, utilizando Node.js e Mongodb. O sistema deve permitir a criação, leitura, atualização, deleção e busca de livros com base em diferentes critérios.
realizar a validação do email com regex, e o middleware via cep para o preenchimento do endereço
Autor
{
  "name": "Fulano",
  "address": "Object",
  "email": teste@teste.com.br,
}
*/
const BD = require("./config/BD.js")
const express = require("express")
const app = express() 
const port = 8000
app.use(express.json())


const rota_livros = require("./routes/livros.js")
app.use("/livros", rota_livros)

const rota_autor = require("./routes/autor.js")
app.use("/autor", rota_autor)





app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`))


