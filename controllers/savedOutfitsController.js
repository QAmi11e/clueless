const savedOutfits = require("../models/savedOutfitModel");

module.exports = {
    index, show,
}

function index(req, res){
    const savedOutfits = savedOutfits.getAll();
    res.json(bottoms);
}

function show(req,res){
    const savedOutfit = savedOutfits.getOne(req.params.id);
    res.json(savedOutfit || {message: "data not found"});
}