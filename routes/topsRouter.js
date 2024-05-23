const express = require("express");
const router = express.Router();
const topsCtrl = require("../controllers/topsController");

router.get("/", topsCtrl.index);

module.exports = router;