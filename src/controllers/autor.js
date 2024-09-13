const model = require("../models/autor.js")

const regex = / ^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$ /



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
        console.log(regex.test("ghvaz28@gmail.com"))
        try {
            const livros = await model.create(req.body)
            livros.save()
            res.json(livros)
        }catch (error) {
            res.status(400).json({message:"ERRO: " + error})
        }
    },

    async destroy(req, res){
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