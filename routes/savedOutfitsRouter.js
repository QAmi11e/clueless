const express = require("express");
const router = express.Router();
const savedOutfitCtrl = require("../controllers/bottomsController");

//---- ROUTES -----
router.get("/", savedOutfitCtrl.index);

module.exports = router;