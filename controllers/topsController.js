const Tops = require("../models/topModel");

module.exports = {
    index, show,
}

function index(req, res){
    const tops = Tops.getAll();
    res.json(tops);
}

function show(req,res){
    const top = Tops.getOne(req.params.id);
    res.json(top || {message: "data not found"});
}