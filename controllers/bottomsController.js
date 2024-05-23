const Bottoms = require("../models/bottomModel");

module.exports = {
    index, show,
}

function index(req, res){
    const bottoms = Bottoms.getAll();
    res.json(bottoms);
}

function show(req,res){
    const bottom = Bottoms.getOne(req.params.id);
    res.json(bottom || {message: "data not found"});
}