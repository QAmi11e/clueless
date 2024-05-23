const Tops = require("../models/topModel");

module.exports = {
    index,
}

function index(req, res){
    const tops = Tops.getAll();
    res.json(tops);
}