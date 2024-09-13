const ctrl = require("../controllers/autor.js")
const express = require("express")
const rota = express.Router()


rota.get("/", ctrl.index)
rota.post("/", ctrl.store)  
rota.delete("/:id", ctrl.destroy)
rota.put("/:id", ctrl.update)

module.exports = rota