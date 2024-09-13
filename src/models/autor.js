const BD = require("../config/BD.js")
const author = BD.Schema
const regex = / ^[\w] +@ [a-zA-Z\d] +\. [a-zA-Z]{2,}$ /

const autorSchema = new author({
    name: {
        type: String,
        required: [true, "O campo 'name' e obrigatório"], 
    },
    address: {
        type: String, 
        required: [true, "O campo 'address' e obrigatório"], 
    },
    email: {
        type: String, 
        required: [true, "O campo 'email' e obrigatório"],
        match: [regex, "Email invalido"]
        
    },
})

const autor = BD.model("autor", autorSchema)
module.exports = autor