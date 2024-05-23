const express = require("express");
const router = express.Router();
const bottomsCtrl = require("../controllers/bottomsController");

//-------- BOTTOMS ROUTES
router.get("/", bottomsCtrl.index); //to get ALL tops
router.get("/:id", bottomsCtrl.show); //to show only ONE top

module.exports = router;