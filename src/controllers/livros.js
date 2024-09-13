const model = require("../models/livros.js")

module.exports = {
    async index(req, res){
        try {
        const livros = await model.find()
        res.json(livros)   
    } catch (error) {
        res.status(400).json({message:'ERRO: ' + error})
    }
    },

    async store(req, res){
        try {
            const livros = await model.create(req.body)
            livros.save()
            res.json(livros)
        }catch (error) {
            res.status(400).json({message:"ERRO: " + error})
        }
    },

    async destroy(req, res){
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        try {
            const livros = await model.findByIdAndDelete(req.params.id)
            res.status(200).json(livros)
        } catch (error) {
            res.status(400).json({message:"ERRO: " + error})
        }
    },

    async update(req, res){
        const livros = await model.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(livros)
    }
}