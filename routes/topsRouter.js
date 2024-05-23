const express = require("express");
const router = express.Router();
const topsCtrl = require("../controllers/topsController");

//-------- TOPS ROUTES
router.get("/", topsCtrl.index); //to get ALL tops
router.get("/:id", topsCtrl.show); //to show only ONE top

module.exports = router;